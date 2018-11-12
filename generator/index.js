module.exports = (api, options) => {
  console.log(api, options)

  if (options.mobile) {
    require('./public')(api, options)
  }

  if (options.common) {

  }

  if (options.api) {

  }

  if (options.components) {}

  if (options.i18n) {
    api.extendPackage({
      dependencies: {
        'vue-i18n': '^8.1.0'
      }
    })
  }

  if (options.router) {
    api.extendPackage({
      dependencies: {
        'vue-router': '^3.0.1'
      }
    })
  }

  if (options.vuex) {
    api.extendPackage({
      dependencies: {
        'vuex': '^3.0.1'
      }
    })
  }

  if (options.axios) {
    api.extendPackage({
      dependencies: {
        'axios': '^0.18.0'
      }
    })
  }
}
