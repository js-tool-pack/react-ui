import { execa } from 'execa';
import * as Path from 'path';
import chalk from 'chalk';
import * as Fs from 'fs';

devPreCheck().then(() =>
  console.log(chalk.cyan('dumi dev pre check finished!')),
);

async function devPreCheck() {
  const p = Path.resolve(__dirname, '../packages/react-ui');
  const distPath = Path.resolve(p, 'dist');
  if (!Fs.existsSync(Path.resolve(distPath, 'styles'))) {
    // 因为文档引入了 css，所以必须先打包 scss 为 css
    await execa('pnpm', ['-C', p, 'build:scss-single']);
  }
}
