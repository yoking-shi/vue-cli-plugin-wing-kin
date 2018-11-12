import Vue from 'vue'
// components import 列表
import HelloWorld from './HelloWorld'

const components = {
  HelloWorld
}

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
