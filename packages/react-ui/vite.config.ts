import { getCommonViteConfig, getBanner } from './vite.utils';
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite';

type Output = Exclude<
  Exclude<UserConfig['build'], undefined>['rollupOptions'],
  undefined
>['output'];
/**
 * Vite configuration
 * https://vitejs.dev/config/
 */
export default defineConfig(({ mode }): UserConfig => {
  const cjsOutput: Output = [
    {
      entryFileNames: '[name].cjs.js',
      banner: getBanner('cjs'),
      format: 'cjs',
    },
  ];
  const output: Output = [
    {
      entryFileNames: '[name].es.js',
      banner: getBanner('es'),
      format: 'es',
    },
    ...(mode !== 'analyze' ? cjsOutput : []),
  ];
  const config = getCommonViteConfig({
    external: [
      'react',
      'react-dom',
      // 'prop-types',
      'rxjs',
      '@tool-pack/basic',
      '@tool-pack/dom',
    ],
    output,
  });
  config.build.emptyOutDir = true;
  return config;
});
