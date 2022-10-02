<template>
	<MainHeader />
	<MonsterArea />
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import MonsterArea from './components/MonsterArea.vue'

export default {
	name: 'App',
	components: {
		MainHeader,
		MonsterArea
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
