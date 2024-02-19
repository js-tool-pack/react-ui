import { defineConfig, UserConfig } from 'vite';
import { getAlias } from '../../utils';
import Path, { resolve } from 'path';
import Fse from 'fs-extra';
import Fs from 'fs';

const distPath = Path.resolve(__dirname, 'dist');
const distLocalePath = Path.resolve(distPath, 'locale');
const localePath = Path.resolve(__dirname, 'src/locale');
const locales = Fs.readdirSync(localePath).filter((s) => s !== '.DS_Store');
const localePaths = locales.map((l) => Path.resolve(localePath, l));

Fse.removeSync(distLocalePath);

const DTSContent = `
import type { Locale } from '../';
declare const locale: Locale;
export default locale;
  `.trim();
locales.forEach((l) => {
  const name = l.replace(Path.extname(l), '');
  const path = Path.resolve(distLocalePath, name + '.d.ts');
  Fse.createFileSync(path);
  Fse.writeFileSync(path, DTSContent);
});

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
      lib: { entry: localePaths },
      emptyOutDir: false,
      target: 'modules',
      minify: true,
    },
    resolve: {
      alias: getAlias(),
    },
    cacheDir: `./.cache`,
  };
});
