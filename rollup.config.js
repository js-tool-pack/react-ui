const path = require('path');
const fs = require('fs');
const ts = require('rollup-plugin-typescript2');
const json = require('@rollup/plugin-json');

if (!process.env['TARGET']) {
  throw new Error('TARGET package must be specified via --environment flag.');
}

const packagesDir = path.resolve(__dirname, 'packages');
const isMonoRepo = fs.existsSync(path.resolve(__dirname, '../'));
const packageDir = isMonoRepo
  ? path.resolve(packagesDir, process.env['TARGET'])
  : __dirname;
const resolve = (/** @type {string} */ p) => path.resolve(packageDir, p);
const pkg = require(resolve(`package.json`));
const packageOptions = pkg.buildOptions || {};
const name = packageOptions.filename || path.basename(packageDir);

// ensure TS checks only once for each build
let hasTSChecked = false;

const outputConfigs = {
  'esm-bundler': {
    file: resolve(`dist/${name}.esm-bundler.js`),
    format: `es`,
  },
  'esm-browser': {
    file: resolve(`dist/${name}.esm-browser.js`),
    format: `es`,
  },
  global: {
    file: resolve(`dist/${name}.global.js`),
    format: `iife`,
  },
  cjs: {
    file: resolve(`dist/${name}.cjs.js`),
    format: `cjs`,
  },
};

const defaultFormats = ['esm-bundler', 'cjs'];
const inlineFormats =
  process.env['FORMATS'] && process.env['FORMATS'].split(',');
const packageFormats =
  inlineFormats || packageOptions.formats || defaultFormats;
const packageConfigs = process.env['PROD_ONLY']
  ? []
  : packageFormats.map((/** @type {string} */ format) =>
      createConfig(format, outputConfigs[format]),
    );

if (process.env.NODE_ENV === 'production') {
  packageFormats.forEach((/** @type {string} */ format) => {
    if (packageOptions.prod === false) {
      return;
    }
    if (format === 'cjs') {
      packageConfigs.push(createProductionConfig(format));
    }
    //    if (/^(global|esm-browser)(-runtime)?/.test(format)) {
    packageConfigs.push(createMinifiedConfig(format));
    //    }
  });
}
module.exports = packageConfigs;

/**
 * @param {string} format
 * @param {{ file: any; format: any; sourcemap?: any; externalLiveBindings?: any; banner?: any; name?: any; }} output
 */
function createConfig(format, output, plugins = []) {
  if (!output) {
    console.log(require('chalk').yellow(`invalid format: "${format}"`));
    process.exit(1);
  }

  const isNodeBuild = format === 'cjs';
  const isGlobalBuild = /global/.test(format);

  output.sourcemap = !!process.env['SOURCE_MAP'];
  output.externalLiveBindings = false;

  const date = new Date();
  output.banner =
    '/*!\n' +
    ` * ${packageOptions.name}(${pkg.name}) v${pkg.version}\n` +
    ` * Author: ${pkg.author}\n` +
    ` * Documentation: ${pkg.homepage}\n` +
    ` * License: ${pkg.license}\n` +
    ` * File: ${path.basename(output.file)}\n` +
    ` * Date: ${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}\n` +
    ` */\n`;

  if (isGlobalBuild) {
    output.name = packageOptions.name;
  }

  const shouldEmitDeclarations =
    pkg.types && process.env['TYPES'] != null && !hasTSChecked;

  const tsPlugin = ts({
    tsconfigOverride: {
      compilerOptions: {
        target: isNodeBuild || output.format === 'es' ? 'es2019' : 'es2015',
        declarationMap: shouldEmitDeclarations,
        declaration: shouldEmitDeclarations,
        sourceMap: output.sourcemap,
      },
      exclude: ['**/__tests__', 'test-dts', 'test/'],
    },
    cacheRoot: path.resolve(__dirname, 'node_modules/.rts2_cache'),
    check: process.env.NODE_ENV === 'production' && !hasTSChecked,
    tsconfig: path.resolve(__dirname, 'tsconfig.json'),
  });
  // we only need to check TS and generate declarations once for each build.
  // it also seems to run into weird issues when checking multiple times
  // during a single build.
  hasTSChecked = true;

  let entryFile = /runtime$/.test(format) ? `src/runtime.ts` : `src/index.ts`;

  const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ];

  return {
    onwarn: (
      /** @type {string} */ msg,
      /** @type {(arg0: any) => void} */ warn,
    ) => {
      if (!/Circular/.test(msg)) {
        warn(msg);
      }
    },
    // Global and Browser ESM builds inlines everything so that they can be
    plugins: [
      json({
        namedExports: false,
      }),
      tsPlugin,
      ...plugins,
    ],
    treeshake: {
      moduleSideEffects: false,
    },
    input: resolve(entryFile),
    // used alone.
    external,
    output,
  };
}

/**
 * @param {string} format
 */
function createProductionConfig(format) {
  return createConfig(format, {
    file: resolve(`dist/${name}.${format}.prod.js`),
    format: outputConfigs[format].format,
  });
}

/**
 * @param {string} format
 */
function createMinifiedConfig(format) {
  const { terser } = require('rollup-plugin-terser');
  return createConfig(
    format,
    {
      file: outputConfigs[format].file.replace(/\.js$/, '.prod.js'),
      format: outputConfigs[format].format,
    },
    [
      terser({
        compress: {
          pure_getters: true,
          ecma: 2015,
        },
        module: /^esm/.test(format),
        safari10: true,
      }),
    ],
  );
}
