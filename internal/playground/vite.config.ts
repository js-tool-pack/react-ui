import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import Path from 'path';
import Fs from 'fs';

const pkgs = Fs.readdirSync(Path.resolve(__dirname, '../../packages'));
const components = Fs.readdirSync(
  Path.resolve(__dirname, '../../packages/components/src'),
);

/**
 * Vite configuration
 * https://vitejs.dev/config/
 */
export default defineConfig(() => {
  return {
    resolve: {
      alias: {
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
        '@tool-pack/react-ui': Path.resolve(
          __dirname,
          '../../packages/react-ui/src',
        ),
        // '@pkg/components': Path.resolve('./.yalc/@tool-pack/react-ui'),
      },
    },
    plugins: [
      // https://github.com/vitejs/vite/tree/main/packages/plugin-react
      react(),
    ],
    css: {
      devSourcemap: true,
    },
    build: {
      sourcemap: true,
    },
    cacheDir: `./.cache`,
  };
});
