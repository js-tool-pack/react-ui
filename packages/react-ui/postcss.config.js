/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('postcss-merge-rules-plus').default,
    require('autoprefixer'),
    require('cssnano'),
  ],
};

module.exports = config;
