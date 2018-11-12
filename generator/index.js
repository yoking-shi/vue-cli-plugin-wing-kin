module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      'vue-router': '^3.0.1',
      'vuex': '^3.0.1',
      'axios': '^0.18.0',
      'vue-i18n': '^8.1.0'
    },
    devDependencies: {
      'vue-cli-plugin-yaml': '^1.0.1'
    }
  })

  api.render({
    [`./public/index.html`]: './template/public/index.html',

    [`./src/common/util.js`]: './template/common/util.js',
    [`./src/common/filter.js`]: './template/common/filter.js',
    [`./src/common/http.js`]: './template/common/http.js',

    [`./src/api/index.js`]: './template/api/index.js',
    [`./src/api/app.js`]: './template/api/app.js',

    [`./src/components/index.js`]: './template/components/index.js',
    [`./src/components/HelloWorld.vue`]: './template/components/HelloWorld.vue',

    [`./src/i18n/index.js`]: './template/i18n/index.js',
    [`./src/i18n/locales/en.yaml`]: './template/i18n/locales/en.yaml',
    [`./src/i18n/locales/zh.yaml`]: './template/i18n/locales/zh.yaml',

    [`./src/router/index.js`]: './template/router/index.js',

    [`./src/store/index.js`]: './template/store/index.js',
    [`./src/store/types.js`]: './template/store/types.js',
    [`./src/store/modules/app.js`]: './template/store/modules/app.js',

    [`./src/views/home.vue`]: './template/views/home.vue',
    [`./src/views/about.vue`]: './template/views/about.vue',

    [`./src/App.vue`]: './template/App.vue',
    [`./src/main.js`]: './template/main.js'
  })
}
