module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint', 'jest',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'no-plusplus': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-unused-vars': 1,
    'linebreak-style': 0,
  },
};
