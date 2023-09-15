import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Path, { resolve } from 'path';
import pkg from './package.json';
import Fs from 'fs';

const pkgs = Fs.readdirSync(Path.resolve(__dirname, '../../packages'));
const components = Fs.readdirSync(
  Path.resolve(__dirname, '../../packages/components/src'),
);

function getBanner(format: string) {
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
export default defineConfig((): UserConfig => {
  return {
    build: {
      rollupOptions: {
        output: [
          {
            globals: {
              'react-dom': 'ReactDom',
              react: 'React',
            },
            entryFileNames: '[name].iife.js',
            banner: getBanner('iife'),
            name: 'ToolPackReactUI',
            format: 'iife',
          },
          {
            entryFileNames: '[name].es.js',
            banner: getBanner('es'),
            format: 'es',
          },

          {
            entryFileNames: '[name].cjs.js',
            banner: getBanner('cjs'),
            format: 'cjs',
          },
        ],
        external: ['react', 'react-dom'],
      },
      outDir: resolve(__dirname, './dist'),
      lib: { entry: entryPath },
      // minify: true,
      cssCodeSplit: true,
      target: 'modules',
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        // '@pkg/*': Path.resolve(__dirname, '../../packages/*/src'),
        ...pkgs.reduce(
          (prev, cur) => {
            prev['@pkg/' + cur] = Path.resolve(
              __dirname,
              `../../packages/${cur}/src`,
            );
            return prev;
          },
          {} as Record<string, string>,
        ),
        ...components.reduce(
          (prev, cur) => {
            prev['~/' + cur] = Path.resolve(
              __dirname,
              `../../packages/components/src/${cur}`,
            );
            return prev;
          },
          {} as Record<string, string>,
        ),
      },
    },
    plugins: [
      // https://github.com/vitejs/vite/tree/main/packages/plugin-react
      react({
        jsxRuntime: 'classic',
      }),
    ],
    cacheDir: `./.cache`,
  };
});
