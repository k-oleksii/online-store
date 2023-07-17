module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: '2021',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-refresh', 'react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'no-var': 'error',
    semi: 'error',
    indent: 'error',
    'no-multi-spaces': 'error',
    'space-in-parens': 'error',
    'no-multiple-empty-lines': 'error',
    'prefer-const': 'error',
    'no-use-before-define': 'error',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    semi: ['error', 'always'],
    'semi-style': ['error', 'last'],
    'eol-last': ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-tag-spacing': ['error'],
    curly: ['error'],
    'key-spacing': [
      'error',
      {
        afterColon: true,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
