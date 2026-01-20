import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

const vueConfigs = pluginVue.configs['flat/recommended'];

export default [
  {
    files: ['**/*.{js,ts,vue}'],
    ignores: ['.nuxt/**', 'node_modules/**', 'dist/**'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    }
  },
  js.configs.recommended,
  ...vueConfigs,
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': 'error'
    }
  }
];



