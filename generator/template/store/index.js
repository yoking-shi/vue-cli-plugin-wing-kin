import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'

Vue.use(Vuex)

Object.assign(app, {
  modules: {}
})

const store = new Vuex.Store(app)

export default store
