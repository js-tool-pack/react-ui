import { getCommonViteConfig, getBanner } from './vite.utils';
import { type UserConfig, defineConfig } from 'vite';

/**
 * Vite configuration
 * https://vitejs.dev/config/
 */
export default defineConfig((): UserConfig => {
  const config = getCommonViteConfig({
    output: [
      {
        globals: {
          'react-dom': 'ReactDOM',
          react: 'React',
        },
        entryFileNames: '[name].iife.js',
        banner: getBanner('iife'),
        name: 'ToolPackReactUI',
        format: 'iife',
      },
    ],
    external: ['react', 'react-dom'],
  });
  config.build.emptyOutDir = false;
  return config;
});
