import { replaceCodePlugin } from 'vite-plugin-replace';
import { visualizer } from 'rollup-plugin-visualizer';
import type { RequiredPart } from '@tool-pack/types';
import type { UserConfig, Plugin } from 'vite';
// import react from '@vitejs/plugin-react';
import { getAlias } from '../../utils';
import pkg from './package.json';
import { resolve } from 'path';

export function getBanner(format: string) {
  const date = new Date();
  return (
    '/*!\n' +
    ` * ToolPackReactUI(${pkg.name}) v${pkg.version}\n` +
    ` * Author: ${pkg.author}\n` +
    ` * Documentation: ${pkg.homepage}\n` +
    ` * License: ${pkg.license}\n` +
    ` * File: index.${format}.js\n` +
    ` * Date: ${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}\n` +
    ` */\n`
  );
}

const entryPath = resolve(__dirname, './src/index.ts');
/**
 * Vite configuration
 * https://vitejs.dev/config/
 */
export function getCommonViteConfig(
  rollupOptions: Exclude<UserConfig['build'], undefined>['rollupOptions'],
): RequiredPart<UserConfig, 'build'> {
  return {
    plugins: [
      // https://github.com/vitejs/vite/tree/main/packages/plugin-react
      // react({
      //   jsxRuntime: 'classic',
      // }),
      replaceCodePlugin({
        replacements: [
          { to: JSON.stringify('production'), from: 'process.env.NODE_ENV' },
        ],
      }),
      {
        ...(visualizer({ filename: 'temp/analyze.html' }) as Plugin),
        apply(_, { mode }) {
          return mode === 'analyze';
        },
      },
    ],
    build: {
      outDir: resolve(__dirname, './dist'),
      lib: { entry: entryPath },
      target: 'modules',
      // minify: true,
      // cssCodeSplit: true,
      // emptyOutDir: true,
      rollupOptions,
    },
    // optimizeDeps: {
    //   exclude: ['react', 'react-dom', 'react-is', 'rxjs', 'react-jsx-runtime'],
    // },
    esbuild: {
      tsconfigRaw: { compilerOptions: { jsx: 'react' } },
    },
    resolve: {
      alias: getAlias(),
    },
    cacheDir: `./.cache`,
  };
}
