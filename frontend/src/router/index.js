import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import SignInPage from '@/components/SignInPage.vue'
import BattleList from '@/components/BattleLists.vue'
import CreateUser from '@/components/CreateUser.vue'

const routes = [
  {
    path: '/battlelist',
    name: 'BattleList',
    component: BattleList
  },
  {
    path: '/createuser',
    name: 'CreateUser',
    component: CreateUser
  },
  {
    path: '/home',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/',
    name: 'SignInPage',
    component: SignInPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

