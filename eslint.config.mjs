import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-plugin-prettier/recommended';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['**/dist/', '**/esm/', '**/.next/', '.yarn/'],
  },
  eslint.configs.recommended,
  {
    plugins: { '@typescript-eslint': tseslint.plugin },
    extends: [...tseslint.configs.recommended],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
      '@typescript-eslint/no-var-requires': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
      '@typescript-eslint/naming-convention': 'off',
    },
  },
  {
    rules: {
      'no-implicit-coercion': 'error',
      'no-warning-comments': [
        'warn',
        {
          terms: ['TODO', 'FIXME', 'XXX', 'BUG'],
          location: 'anywhere',
        },
      ],
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-undef': 'off',
    },
  },
  {
    plugins: { 'unused-imports': unusedImports, unicorn },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    plugins: { import: importPlugin },
    rules: {
      'import/no-duplicates': ['error', { 'prefer-inline': true }],
      'import/order': [
        2,
        {
          groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
          alphabetize: { order: 'asc', caseInsensitive: false },
        },
      ],
    },
  },
  prettierConfig
);
