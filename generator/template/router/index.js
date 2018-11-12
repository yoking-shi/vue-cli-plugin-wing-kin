import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: () => import( /* webpackChunkName: "home" */ '@/views/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import( /* webpackChunkName: "about" */ '@/views/about.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
