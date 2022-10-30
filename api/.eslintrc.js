module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    '@mate-academy/eslint-config',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {},
};
