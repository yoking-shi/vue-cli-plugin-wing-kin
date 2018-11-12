module.exports = (api, options) => {
  console.log(api, options)

  // 设置一些基础配置
  require('./common')(api, options)

  if (options.components) {
  }

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

  if (options.axios_with_api) {
    api.extendPackage({
      dependencies: {
        'axios': '^0.18.0'
      }
    })
  }
}
