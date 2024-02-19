import react from '@vitejs/plugin-react';
import { getAlias } from '../../utils';
import { defineConfig } from 'vite';

/**
 * Vite configuration
 * https://vitejs.dev/config/
 */
export default defineConfig(() => {
  return {
    plugins: [
      // https://github.com/vitejs/vite/tree/main/packages/plugin-react
      react(),
    ],
    resolve: {
      alias: getAlias(),
    },
    css: {
      devSourcemap: true,
    },
    build: {
      sourcemap: true,
    },
    cacheDir: `./.cache`,
  };
});
