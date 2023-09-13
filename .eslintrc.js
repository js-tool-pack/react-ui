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
  overrides: [
    {
      files: ['scripts/**', '*.config.js', '*.config.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['**.test.ts', '**.test.tsx'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
      },
    },
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
};
