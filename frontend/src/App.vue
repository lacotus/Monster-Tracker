<template>
	<div>

		<!--<component v-bind:is="component" v-model="userID" @update="setUserID"></component>-->
		<router-view></router-view>
	</div>
</template>

<script>
import BattlePage from './components/NavigationComponents/BattlePage.vue'
import SignInPage from './components/SignInComponents/SignInPage.vue'
import CreateUser from './components/SignInComponents/CreateUser.vue'
import MainPage from './components/NavigationComponents/MainPage.vue'
import BattleLists from './components/NavigationComponents/BattleLists.vue'
import CustomMonster from './components/CustomMonster'

export default {
	name: 'App',
	components: {
		BattlePage,
		SignInPage,
		CreateUser,
		MainPage,
		BattleLists,
		CustomMonster
	},
	data() {
		return {
			component: 'SignInPage',
			userID: ''
		}
	},
	methods: {
		getUserID() {
			return this.userID
		},
		setBattleLists() {
			this.component = 'BattleLists'
		},
		setBattlePage() {
			this.component = 'BattlePage'
		},
		setCreateAccount() {
			this.component = 'CreateUser'
		},
		setCustomMonster() {
			this.component = 'CustomMonster'
		},
		setMainPage() {
			this.component = 'MainPage'
		},
		setSignInPage() {
			this.component = 'SignInPage'
		},
		setUserID(data) {
			console.log('App.vue\'s userID set to ', data)
			this.userID = data
		}
	}
}
</script>

<style>
@font-face {
	font-family: "Cutive";
	src: local("Cutive"),
		url(./fonts/Cutive/Cutive-Regular.ttf) format("truetype");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
