import { createApp } from 'vue'
import App from './App.vue'
import MonsterInstance from './components/MonsterInstance.vue'

const myApp = createApp(App)

myApp.component('monsterInstance', MonsterInstance)

myApp.mount('#app')

