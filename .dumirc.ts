import { defineConfig } from 'dumi';
import Fs from 'fs';
import * as Path from 'path';
import pkg from './package.json';

const pkgs = Fs.readdirSync(Path.resolve(__dirname, 'packages'));

export default defineConfig({
  mfsu: false,
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'react-ui',
    footer: `Open-source MIT Licensed | Copyright © ${new Date().getFullYear()}-present
    <br />
    Powered by <a href="${pkg.homepage}">${pkg.name.replace(
      '-monorepo',
      '',
    )}</a>`,
  },
  // apiParser: {},
  resolve: {
    atomDirs: [{ type: 'component', dir: 'packages/components/src' }],
    // 配置入口文件路径，API 解析将从这里开始
    // entryFile: './packages/react-ui/src/index.ts',
  },
  // 在子包中寻找，优先定向到 libs 文件夹
  monorepoRedirect: {
    srcDir: ['packages'],
    // peerDeps: true,
  },
  // 不重定向 @scope/* 的子包
  //   monorepoRedirect: {
  //     exclude: [/^@scope\/.+/],
  //   }
  locales: [
    // { id: 'en-US', name: 'English', suffix: '' },
    // { id: 'zh-CN', name: '中文', suffix: '-cn' },
  ],
  alias: {
    '@tool-pack/react-ui': Path.resolve(__dirname, 'packages/react-ui/src'),
    ...pkgs.reduce((prev, cur) => {
      prev['@pkg/' + cur] = Path.resolve(__dirname, `packages/${cur}/src`);
      return prev;
    }, {} as Record<string, string>),
  },
});
