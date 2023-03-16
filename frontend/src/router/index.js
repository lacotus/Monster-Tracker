import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/MainPage.vue'
import SignInPage from '@/components/SignInPage.vue'
import BattleList from '@/components/BattleLists.vue'
import BattlePage from '@/components/BattlePage.vue'
import CreateUser from '@/components/CreateUser.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/battlelist',
      name: 'battlelist',
      component: BattleList
    },
    {
      path: '/battlepage',
      name: 'battlepage',
      component: BattlePage
    },
    {
      path: '/createuser',
      name: 'createuser',
      component: CreateUser
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path: '/',
      name: 'SignInPage',
      component: SignInPage
    }
  ]
})

export default router

