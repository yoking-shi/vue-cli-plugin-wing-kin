module.exports = (api, options) => {
  api.render({
    [`./public/index.html`]: './template/index.html',
    [`./src/common/util.js`]: './template/util.js',
    [`./src/common/filter.js`]: './template/util.js'
  })
}
