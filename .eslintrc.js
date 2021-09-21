module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  overrides: [
    {
      files: 'src/handlers/*/handler.ts',
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: 'serverless.ts',
      rules: {
        'no-template-curly-in-string': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.eslint.json', './tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: true,
        natural: false,
      },
    ],
  },
};
