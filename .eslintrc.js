module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['jsx-a11y'],
  rules: {
    // 'no-unused-vars': [ // 需要使用typescript的unused，否则会对enum误报
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
};
