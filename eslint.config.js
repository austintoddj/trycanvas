import prettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    ignores: ['node_modules', 'dist']
  },
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      ...prettier.rules,
      'vue/no-unused-vars': 'error'
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  }
]
