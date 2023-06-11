import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import Path, { resolve } from 'path';
import Fs from 'fs';

const pkgs = Fs.readdirSync(Path.resolve(__dirname, '../../packages'));

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
        '@pkg/*': Path.resolve(__dirname, '../../packages/*/src'),
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
          },
          {
            format: 'es',
            entryFileNames: '[name].es.js',
          },

          {
            format: 'cjs',
            entryFileNames: '[name].cjs.js',
          },
        ],
      },
    },
  };
});
