import { isMonoRepo, rootDir } from './utils';
import { type Options, execa } from 'execa';
import { ReleaseType } from 'semver';
import { prompt } from 'enquirer';
import * as semver from 'semver';
import * as path from 'path';
import chalk from 'chalk';
import * as fs from 'fs';

const rootPkgJson = require('../package.json');
const args = require('minimist')(process.argv.slice(2));

const npmTool = 'pnpm';
// const bin = (name: string) =>
//   path.resolve(__dirname, '../node_modules/.bin/' + name);
const step = (msg: string) => console.log(chalk.cyan(msg));

const forEachPkgs = async (
  config: Config,
  cb: (
    path: string,
    json: typeof rootPkgJson,
    pkgPath: string,
  ) => Promise<unknown> | void,
) => {
  for (const pkg of config.pkgs) {
    const pkgPath = getPkgPath(pkg);
    const _path = path.resolve(getPkgPath(pkg), 'package.json');
    const pkgJson = require(_path);
    if (pkgJson?.private) continue;
    await cb(_path, pkgJson, pkgPath);
  }
};

/**
 * @param {string} bin
 * @param {string[]} args
 * @param {{}} opts
 */
const exec = (
  bin: string,
  args: string[],
  opts: Options = {
    /*execPath: path.resolve(__dirname, '../')*/
  },
) => execa(bin, args, { stdio: 'inherit', ...opts });

const getPkgPath = (pkg: string) =>
  path.resolve(__dirname, `../packages/${pkg}`);
const actions = {
  async release(config: Config) {
    async function publishPkg(pkgPath: string) {
      const json = JSON.parse(
        fs.readFileSync(path.resolve(pkgPath, 'package.json'), 'utf-8'),
      );
      if (json.private) return;

      /*let releaseTag = null;
      if (config.tag) {
        releaseTag = config.tag;
      } else if (config.targetVersion.includes('alpha')) {
        releaseTag = 'alpha';
      } else if (config.targetVersion.includes('beta')) {
        releaseTag = 'beta';
      } else if (config.targetVersion.includes('rc')) {
        releaseTag = 'rc';
      }*/

      step(`Publishing ${json.name}...`);
      try {
        await exec('npm', ['publish', '--access=public'], {
          stdio: 'pipe',
          cwd: pkgPath,
        });
        console.log(
          chalk.green(
            `Successfully published ${json.name}@${config.targetVersion}`,
          ),
        );
      } catch (e: any) {
        if (e.stderr.match(/previously published/)) {
          console.log(chalk.red(`Skipping already published: ${json.name}`));
        } else {
          throw e;
        }
      }
    }
    if (isMonoRepo)
      for (const pkg of config.pkgs) {
        if (config.skippedPackages.includes(pkg)) continue;
        await publishPkg(getPkgPath(pkg));
      }
    else await publishPkg(rootDir());
  },
  updateVersions(pkgs: string[], version: string) {
    function updateDeps(
      json: Record<string, any>,
      depType: string,
      version: string,
    ) {
      const dep = json[depType];
      for (const k in dep) {
        if (k.startsWith('@' + rootPkgJson.name)) {
          console.log(
            chalk.yellow(`${json['name']} -> ${depType} -> ${k}@${version}`),
          );
          dep[k] = version;
        }
      }
    }
    function updatePackage(pkgPath: string, version: string) {
      const file = fs.readFileSync(pkgPath).toString();
      const json = JSON.parse(file);
      json.version = version;
      updateDeps(json, 'devDependencies', version);
      updateDeps(json, 'dependencies', version);
      updateDeps(json, 'peerDependencies', version);
      fs.writeFileSync(pkgPath, JSON.stringify(json, null, 2));
    }
    for (const pkg of pkgs) {
      updatePackage(path.resolve(getPkgPath(pkg), 'package.json'), version);
    }
    updatePackage(path.resolve(__dirname, `../package.json`), version);
  },
  async gitCommit(targetVersion: string) {
    const { stdout } = await exec('git', ['diff'], { stdio: 'pipe' });
    if (stdout) {
      step('\nCommitting changes...');
      await exec('git', ['add', '-A']);
      await exec('git', ['commit', '-m', `release: v${targetVersion}`]);
    } else {
      console.log('No changes to commit.');
    }
  },
  build: async (config: Config) => {
    await forEachPkgs(config, (_, json, pkgPath) => {
      if (!json?.scripts?.build) return;
      console.log(chalk.cyan('build:', pkgPath));
      return exec(npmTool, ['build'], { execPath: pkgPath });
    });
  },
  async gitPush(targetVersion: string) {
    // push to GitHub
    await exec('git', ['tag', `v${targetVersion}`]);
    await exec('git', ['push', 'origin', `refs/tags/v${targetVersion}`]);
    await exec('git', ['push']);
  },
  jestCheck: async (config: Config) => {
    await forEachPkgs(config, (_, json, pkgPath) => {
      if (!json?.scripts?.test) return;
      return exec(npmTool, ['test'], { execPath: pkgPath });
    });
  },
  genChangeLog: () => exec(npmTool, ['changelog']),
  lintCheck: () => exec(npmTool, ['check:all']),
};

interface Config {
  skippedPackages: string[];
  currentVersion: string;
  targetVersion: string;
  skipBuild: boolean;
  skipTest: boolean;
  pkgs: string[];
  preId: string;
  tag: string;
}
const baseConfig: Config = {
  pkgs: isMonoRepo
    ? fs.readdirSync(path.resolve(__dirname, '../packages'))
    : [],
  // semver.prerelease('1.2.3-alpha.3') -> [ 'alpha', 3 ]
  preId: args.preid || semver.prerelease(rootPkgJson.version)?.[0],
  currentVersion: rootPkgJson.version,
  skipBuild: args.skipBuild,
  targetVersion: args._[0],
  skipTest: args.skipTest,
  skippedPackages: [],
  tag: args.tag,
};

const inc = (i: ReleaseType) =>
  semver.inc(baseConfig.currentVersion, i, baseConfig.preId);

async function getVersion(preId: string, currentVersion: string) {
  let targetVersion;
  const versionIncrements: ReleaseType[] = [
    'patch',
    'minor',
    'major',
    ...(preId
      ? (['prepatch', 'preminor', 'premajor', 'prerelease'] as const)
      : []),
  ];
  const { release } = await prompt<{ release: string }>([
    {
      choices: versionIncrements
        .map<{ message: string; name: string; hint: string }>((i) => {
          const version = inc(i) as string;
          return {
            hint: 'v' + version,
            name: version,
            message: i,
          };
        })
        .concat([{ message: `custom`, name: 'custom', hint: '' }]),
      message: `选择发布版本(当前v${rootPkgJson.version})`,
      name: 'release',
      type: 'select',
    },
  ]);
  if (release === 'custom') {
    ({ version: targetVersion } = await prompt<{ version: string }>({
      validate(value) {
        // 校验版本号
        if (!semver.valid(value)) return `invalid version: ${value}`;
        if (semver.gte(rootPkgJson.version, value))
          return '新版本号必须大于旧版本号';

        return true;
      },
      message: `Input custom version, cur(v${rootPkgJson.version}):`,
      initial: currentVersion,
      name: 'version',
      type: 'input',
    }));
  } else {
    targetVersion = release;
  }

  const { yes } = await prompt<{ yes: boolean }>({
    message: `Releasing v${targetVersion}. Confirm?`,
    type: 'confirm',
    name: 'yes',
  });

  if (!yes) {
    throw new Error(`select NO`);
  }
  return targetVersion;
}

async function getConfig() {
  const config = {
    ...baseConfig,
  };

  config.targetVersion ||= await getVersion(
    config.preId,
    config.currentVersion,
  );

  return config;
}

async function setup() {
  console.log('start');

  const config = await getConfig();

  step('\nRunning tests...');
  if (!config.skipTest) {
    await actions.lintCheck();
    await actions.jestCheck(config);
  } else {
    console.log(`(skipped)`);
  }

  step('\nRunning update versions...');
  await actions.updateVersions(config.pkgs, config.targetVersion);

  step('\nRunning build...');
  if (!config.skipBuild) {
    await actions.build(config);
  } else {
    console.log(`(skipped)`);
  }

  // generate changelog
  step('\nGenerating changelog...');
  await actions.genChangeLog();

  // monorepo才需要重新install依赖
  // 暂时不需要更新依赖
  // if (isMonoRepo) {
  //   // update pnpm-lock.yaml
  //   step('\nUpdating lockfile...');
  //   await exec(npmTool, ['install', '--prefer-offline']);
  // }

  step('\ngit commit...');
  await actions.gitCommit(config.targetVersion);

  // publish packages
  step('\nPublishing packages...');
  await actions.release(config);
  console.log(config);

  return config;
}

setup().then(
  async (config) => {
    // push to GitHub
    step('\nPushing to GitHub...');
    await actions.gitPush(config.targetVersion);
    console.log('end');
  },
  (e) => {
    console.log('error', e);
    actions.updateVersions(baseConfig.pkgs, baseConfig.currentVersion);
  },
);
