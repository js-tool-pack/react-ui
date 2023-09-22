import { defineConfig } from 'dumi';
import * as Fs from 'fs';
import * as Path from 'path';
// @ts-ignore
import pkg from './package.json';

const pkgs = Fs.readdirSync(Path.resolve(__dirname, 'packages'));
const components = Fs.readdirSync(
  Path.resolve(__dirname, 'packages/components/src'),
);
const pkgName = pkg.name.replace('-monorepo', '');

type ENV = 'development' | 'production';
const map: Record<ENV, Parameters<typeof defineConfig>[0]> = {
  development: {},
  production: {
    base: '/react-ui/',
    publicPath: '/react-ui/',
  },
};
const env = process.env['NODE_ENV'] as ENV;

export default defineConfig({
  ...map[env],
  // mfsu: true, // windows 系统开启该选项会启动不了
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'react-ui',
    showLineNum: true,
    github: pkg.repository.url.replace(/^git\+|\.git$/g, ''),
    // 目前的dumi-theme-antd-style主题不支持从这配置，已移动到.dumi/theme/slots/Footer/index.tsx配置
    // footer: `Open-source MIT Licensed | Powered by <a href="${pkg.homepage}">${pkgName}</a>`,

    // https://dumi-theme-antd-style.arvinx.app/config#apiheader
    apiHeader: {
      // 组件库包名，可以从 package.json 中引入名称
      pkg: pkgName,
      // 匹配路由，默认为 /api 或 /components
      match: ['/components'],
      // github 会匹配 themeConfig.github 字段
      sourceUrl: `{github}/tree/main/packages/components/src/{atomId.kebab}/index.ts`,
      docUrl: `{github}/tree/main/packages/components/src/{atomId.kebab}/index.{locale}.md`,
    },
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
    ...pkgs.reduce(
      (prev, cur) => {
        prev['@pkg/' + cur] = Path.resolve(__dirname, `packages/${cur}/src`);
        return prev;
      },
      {} as Record<string, string>,
    ),
    ...components.reduce(
      (prev, cur) => {
        prev['~/' + cur] = Path.resolve(
          __dirname,
          `packages/components/src/${cur}`,
        );
        return prev;
      },
      {} as Record<string, string>,
    ),
  },
});
