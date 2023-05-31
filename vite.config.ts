import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

/**
 * Vite configuration
 * https://vitejs.dev/config/
 */
export default defineConfig(() => {
  return {
    cacheDir: `./.cache`,
    plugins: [
      // https://github.com/vitejs/vite/tree/main/packages/plugin-react
      react(),
    ],
  };
});
