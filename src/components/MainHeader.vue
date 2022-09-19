<template>
    <div class="MainStyle">Monster Tracker</div>
    <div><button class="ButtonStyle" v-on:click="writeWindowWidth()"></button></div>
</template>

<!-- Commenting some code for testing reasons -->

<script>
export default {
	name: 'MainHeader',
	props: {
		title: String
	},
	methods: {
		writeWindowWidth(){
			console.log(window.innerWidth);
			console.log(window.innerHeight);
		}
	}
}
</script>

<style>
    .ButtonStyle {
		width: 50px;
		height: 50px;	
    }

    .MainStyle {
		background-color: black;
		color: white;
    }
</style>
