export default {
  plugins: {
    autoprefixer: {},
    '@csstools/postcss-global-data': {
      files: []
    },
    'postcss-preset-env': {
      stage: false,
      features: {
        'custom-media-queries': true
      }
    },
    'postcss-functions': {
      functions: {
        em: function (value, base = 16) {
          const _value = String(value).split('px')[0]
          const _base = String(base).split('px')[0]
          return `${_value / _base}em`
        },
        rem: function (value, base = 16) {
          const _value = String(value).split('px')[0]
          const _base = String(base).split('px')[0]
          return `${_value / _base}rem`
        }
      }
    },
    'postcss-import': {}
  }
}
