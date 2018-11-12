import Vue from 'vue'
import i18n from '@/i18n'
import util from '@/common/util'
import filter from '@/common/filter'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/components'

Vue.config.productionTip = false

Vue.prototype.$util = util
Vue.prototype.$filter = filter
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
