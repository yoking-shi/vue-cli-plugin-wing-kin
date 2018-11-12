import Vue from 'vue'
import VueI18n from 'vue-i18n'

const en = require('./locales/en.yaml')
const zh = require('./locales/zh.yaml')

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    en: en,
    zh: zh
  }
})

export default i18n
