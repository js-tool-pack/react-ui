const dts = require('rollup-plugin-dts');

const config = [
  {
    input: './temp/types/packages/react-ui/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts.default()],
  },
];

module.exports = config;
