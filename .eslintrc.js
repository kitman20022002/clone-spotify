module.exports = {
  extends: ['airbnb', 'prettier', 'plugin:import/typescript'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
  },
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],
    'jsx-a11y/label-has-associated-control': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'no-underscore-dangle': ['off'],
    'no-console': 2,
    'no-debugger': 'error',
    'no-alert': 'error',
    'default-case': 'error',
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['off'],
    'no-return-assign': ['off'],
  },
};
