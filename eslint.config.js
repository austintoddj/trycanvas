import prettierConfig from 'eslint-config-prettier'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default [
  {
    ignores: ['node_modules', 'dist']
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser, // Correct parser import
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: {
      vue
    },
    rules: {
      ...prettierConfig.rules, // Prettier rules
      ...vue.configs['vue3-recommended'].rules, // Vue recommended rules
      'no-unused-vars': 'error',
      'no-console': 'error'
    }
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'error'
    }
  }
]
