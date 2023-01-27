<template>
	<div>

		<component v-bind:is="component"></component>

	</div>
</template>

<script>
import BattlePage from './components/BattlePage.vue'
import SignInPage from './components/SignInPage.vue'
import CreateUser from './components/CreateUser.vue'

export default {
	name: 'App',
	components: {
		BattlePage,
		SignInPage,
		CreateUser
	},
	data() {
		return {
			component: 'CreateUser'
		}
	},
	methods: {
		setBattlePage() {
			this.component = 'BattlePage'
		},
		setSignInPage() {
			this.component = 'SignInPage'
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
