module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react', 'react-hooks'],
  settings: { 'import/resolver': { typescript: {} } },
  rules: {
    'prettier/prettier': 'error',
    'no-implicit-coercion': 'error',
    'no-undef': 'off',
    semi: 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'prefer-const': 'error',
    'no-var': 'error',
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal'], 'parent', 'sibling', 'index'],
        alphabetize: { order: 'asc' },
      },
    ],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': ['error'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};