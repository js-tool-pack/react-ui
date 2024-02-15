import { resolve } from 'path';
import { execa } from 'execa';
import Chalk from 'chalk';
import * as Fs from 'fs';

const rootDir = resolve(__dirname, '../../components/src');
const dist = resolve(__dirname, '../dist');

start().then(() =>
  console.log(Chalk.cyan('compile scss single file success!')),
);

async function start() {
  for (const { component, path } of getComponents()) {
    await compileScss(
      resolve(path, 'index.scss'),
      resolve(dist, 'styles', component + '.css'),
    );
  }
  await compileScss(
    resolve(rootDir, 'css.variable.scss'),
    resolve(dist, 'styles', 'css.variable.css'),
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
