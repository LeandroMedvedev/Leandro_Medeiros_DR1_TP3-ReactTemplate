import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['*.js', '*.jsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        browser: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'warn', // Exemplo de uma regra ESLint padrão
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    ignores: ['node_modules'],
  },
];
