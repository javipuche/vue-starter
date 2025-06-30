import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import testingLibrary from 'eslint-plugin-testing-library'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,vue}']
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/public/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser
      }
    }
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
  },

  {
    name: 'app/vue-rules',
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/html-self-closing': 'off',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/max-attributes-per-line': 'off'
    }
  }
])
