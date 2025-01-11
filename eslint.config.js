import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import testingLibrary from 'eslint-plugin-testing-library'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,vue}']
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**']
  },

  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  ...pluginVue.configs['flat/recommended'],
  skipFormatting,

  {
    name: 'app/settings',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js'],
          moduleDirectory: ['node_modules']
        },
        alias: {
          map: [['@/*', './src']],
          extensions: ['.vue', '.js', '.json']
        }
      }
    }
  },

  {
    name: 'app/tests',
    files: ['src/**/__tests__/*', 'tests/*'],
    ...pluginVitest.configs.recommended,
    ...testingLibrary.configs['flat/vue'],
    languageOptions: {
      globals: {
        ...pluginVitest.environments.env.globals
      }
    }
  }
]
