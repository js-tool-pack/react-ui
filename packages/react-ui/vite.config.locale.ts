import { defineConfig, UserConfig } from 'vite';
import { getAlias } from '../../utils';
import Path, { resolve } from 'path';
import Fs from 'fs';

const localePath = Path.resolve(__dirname, 'src/locale');
const locales = Fs.readdirSync(localePath)
  .filter((s) => s !== '.DS_Store')
  .map((l) => Path.resolve(localePath, l));

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
            entryFileNames: '[name].js',
            format: 'module',
          },
        ],
      },
      outDir: resolve(__dirname, 'dist/locale'),
      lib: { entry: locales },
      target: 'modules',
      emptyOutDir: true,
      minify: true,
    },
    resolve: {
      alias: getAlias(),
    },
    cacheDir: `./.cache`,
  };
});
