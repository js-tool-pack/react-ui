import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import Path from 'path';
import Fs from 'fs';

const pkgs = Fs.readdirSync(Path.resolve(__dirname, '../../packages'));

/**
 * Vite configuration
 * https://vitejs.dev/config/
 */
export default defineConfig(() => {
  return {
    cacheDir: `./.cache`,
    resolve: {
      alias: {
        ...pkgs.reduce((prev, cur) => {
          prev['@pkg/' + cur] = Path.resolve(
            __dirname,
            `../../packages/${cur}/src`,
          );
          return prev;
        }, {} as Record<string, string>),
        // '@pkg/components': Path.resolve('./.yalc/@tool-pack/react-ui'),
      },
    },
    plugins: [
      // https://github.com/vitejs/vite/tree/main/packages/plugin-react
      react(),
    ],
    build: {
      sourcemap: true,
    },
    css: {
      devSourcemap: true,
    },
  };
});
