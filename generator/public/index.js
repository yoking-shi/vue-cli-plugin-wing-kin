module.exports = (api, options) => {
  api.render({
    [`./public/index.html`]: './template/index.html'
  })
}
