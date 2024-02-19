import { resolve } from 'path';
import { execa } from 'execa';
import Chalk from 'chalk';
import FE from 'fs-extra';
import * as Fs from 'fs';

const rootDir = resolve(__dirname, '../../components/src');
const dist = resolve(__dirname, '../dist');
const stylesDir = resolve(dist, 'styles');

start().then(() =>
  console.log(Chalk.cyan('compile scss single file success!')),
);

async function start() {
  FE.removeSync(stylesDir);
  await compile();
}

async function compile() {
  for (const { component, path } of getComponents()) {
    await compileScss(
      resolve(path, 'index.scss'),
      resolve(stylesDir, component + '.css'),
    );
  }
  await compileScss(
    resolve(rootDir, 'css.variable.scss'),
    resolve(stylesDir, 'css.variable.css'),
  );

  function compileScss(fromPath: string, toPath: string) {
    // sass src/index.scss dist/index.css --no-source-map
    return execa('sass', [fromPath, toPath, '--no-source-map']);
  }
}

function getComponents(): Array<{ component: string; path: string }> {
  const ignore = ['.DS_Store'];
  return Fs.readdirSync(rootDir)
    .map((dir) => ({ path: resolve(rootDir, dir), component: dir }))
    .filter(
      (p) =>
        !ignore.includes(p.component) &&
        Fs.statSync(p.path).isDirectory() &&
        Fs.existsSync(resolve(p.path, 'index.scss')),
    );
}
