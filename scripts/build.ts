import * as Path from 'path';
import chalk from 'chalk';
import { execa } from 'execa';
import { getTargets, fuzzyMatchTarget, rootDir, isMonoRepo } from './utils';
import Fse from 'fs-extra';
import minimist from 'minimist';

const rootPath = rootDir();

const allTargets = isMonoRepo ? getTargets() : [rootPath];

const args = minimist(process.argv.slice(2));
const targets = args._;
const formats = args['formats'] || args['f'];
const sourceMap = args['sourcemap'] || args['s'];
const isRelease = args['release'];
const buildTypes = args['t'] || args['types'] || isRelease;
const buildAllMatching = args['all'] || args['a'];

async function buildAll(targets: string[]) {
  await runParallel(require('os').cpus().length, targets, build);
}

async function runParallel(
  maxConcurrency: number,
  source: string[],
  iteratorFn: typeof build,
) {
  const ret: Promise<void>[] = [];
  const executing: Promise<void>[] = [];
  for (const item of source) {
    const p = Promise.resolve().then(() => iteratorFn(item));
    ret.push(p);

    if (maxConcurrency <= source.length) {
      const e: Promise<void> = p.then(
        () => (executing.splice(executing.indexOf(e), 1), void 0),
      );
      executing.push(e);
      if (executing.length >= maxConcurrency) {
        await Promise.race(executing);
      }
    }
  }
  return Promise.all(ret);
}

/**
 * @param {string} target
 * @return {Promise<void>}
 */
async function build(target: string) {
  const pkgDirPath = isMonoRepo ? rootDir(`packages/${target}`) : rootPath;
  const pkgJson = require(`${pkgDirPath}/package.json`);
  if (pkgJson.private) return;
  await Fse.remove(Path.resolve(pkgDirPath, 'dist'));

  const env = pkgJson.buildOptions?.env || 'production';

  await execa(
    'rollup',
    [
      '-c',
      '--environment',
      [
        `NODE_ENV:${env}`,
        `TARGET:${target}`,
        formats ? `FORMATS:${formats}` : ``,
        // buildTypes ? `TYPES:true` : ``,
        sourceMap ? `SOURCE_MAP:true` : ``,
      ]
        .filter(Boolean)
        .join(','),
    ],
    { stdio: 'inherit' },
  );

  if (buildTypes && pkgJson.types) buildType(target, pkgDirPath /*, pkgJson*/);
}

async function buildType(
  target: string,
  pkgDirPath: string,
  // pkgJson: Record<string, any>,
) {
  console.log(
    chalk.bold(chalk.yellow(`Rolling up type definitions for ${target}...`)),
  );

  await execa('npm', ['run', 'build:dts'], {
    stdio: 'inherit',
    cwd: pkgDirPath,
    execPath: pkgDirPath,
  });
}

async function run() {
  if (targets.length) {
    await buildAll(fuzzyMatchTarget(targets, buildAllMatching));
  } else {
    await buildAll(allTargets);
  }
}

run();
