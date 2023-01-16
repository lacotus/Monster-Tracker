<template>
	<SignInPage />
	<!--<MainHeader />-->
	<!--<TitleBar />-->
	<!--<Page1 />-->
	<!--<MonsterArea />-->
	<!--<MonsterInstance />-->
</template>

<script>
//import MainHeader from './components/MainHeader.vue'
//import MonsterArea from './components/MonsterArea.vue'
//import MonsterInstance from './components/MonsterInstance.vue'
//import Page1 from './components/MonsterInstanceComponents/Page1.vue'
//import TitleBar from './components/MonsterInstanceComponents/TitleBar.vue'
import SignInPage from './components/SignInPage.vue'

export default {
	name: 'App',
	components: {
		//MainHeader,
		//MonsterArea,
		//MonsterInstance
		//Page1,
		//TitleBar
		SignInPage
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
