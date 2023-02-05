import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register.vue'
import MainPage from '@/components/MainPage.vue'

Vue.use(Router)

const newRouter = new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      componenet: MainPage 
    }
  ]
})

export newRouter

