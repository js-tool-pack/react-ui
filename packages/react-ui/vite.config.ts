import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import Path, { resolve } from 'path';
import Fs from 'fs';
import pkg from './package.json';

const pkgs = Fs.readdirSync(Path.resolve(__dirname, '../../packages'));

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
export default defineConfig(() => {
  return {
    cacheDir: `./.cache`,
    resolve: {
      alias: {
        // '@pkg/*': Path.resolve(__dirname, '../../packages/*/src'),
        ...pkgs.reduce((prev, cur) => {
          prev['@pkg/' + cur] = Path.resolve(
            __dirname,
            `../../packages/${cur}/src`,
          );
          return prev;
        }, {} as Record<string, string>),
      },
    },
    plugins: [
      // https://github.com/vitejs/vite/tree/main/packages/plugin-react
      react({
        jsxRuntime: 'classic',
      }),
    ],
    build: {
      target: 'modules',
      // minify: true,
      cssCodeSplit: true,
      emptyOutDir: true,
      outDir: resolve(__dirname, './dist'),
      lib: { entry: entryPath },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: [
          {
            name: 'ToolPackReactUI',
            format: 'iife',
            entryFileNames: '[name].iife.js',
            globals: {
              react: 'React',
              'react-dom': 'ReactDom',
            },
            banner: getBanner('iife'),
          },
          {
            format: 'es',
            entryFileNames: '[name].es.js',
            banner: getBanner('es'),
          },

          {
            format: 'cjs',
            entryFileNames: '[name].cjs.js',
            banner: getBanner('cjs'),
          },
        ],
      },
    },
  };
});
