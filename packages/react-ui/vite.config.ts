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
        // jsxRuntime: 'classic',
      }),
    ],
    build: {
      target: 'modules',
      // minify: true,
      cssCodeSplit: true,
      emptyOutDir: true,
      outDir: resolve(__dirname, './dist'),
      lib: {
        entry: entryPath,
        name: 'ToolPackReactUI',
        // format: ['es', 'cjs', 'iife'],
        // fileName: (format) => `react-ui.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: [
          {
            name: 'ReactUI',
            format: 'iife',
            sourcemap: false,
            dir: './dist/iife',
            entryFileNames: '[name].js',
            chunkFileNames: '[name].js',
            assetFileNames: '[name].[ext]',
            manualChunks: undefined,
            inlineDynamicImports: false,
            generatedCode: {
              symbols: true,
            },
            exports: 'named',
          },
          {
            format: 'es',
            dir: 'dist/es',
            // sourcemap: false,
            entryFileNames: '[name].js',
            chunkFileNames: '[name].js',
            // assetFileNames: '[name].[ext]',
            inlineDynamicImports: false,
            manualChunks: undefined,
            preserveModules: true,
            // preserveModulesRoot: 'src',
            generatedCode: {
              symbols: true,
            },
            exports: 'named',
          },

          {
            format: 'cjs',
            dir: 'dist/cjs',
            // sourcemap: false,
            entryFileNames: '[name].js',
            chunkFileNames: '[name].js',
            // assetFileNames: '[name].[ext]',
            inlineDynamicImports: false,
            manualChunks: undefined,
            preserveModules: true,
            // preserveModulesRoot: 'src',
            generatedCode: {
              symbols: true,
            },
            exports: 'named',
          },
        ],
      },
    },
  };
});
