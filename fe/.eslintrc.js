module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    '@mate-academy/eslint-config',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
