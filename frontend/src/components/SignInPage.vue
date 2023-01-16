<template>
	<label>SignInPage</label>
</template>

<script>
export default {
	name: 'SignInPage',
	methods: {
		getWindowDemensions() {
			var width = window.innerWidth;
			var height = window.innerHeight;
			
			console.log('Width and height: ', width, height)
		}
	},
	mounted: function() {
		this.getWindowDemensions()
	}
}
</script>

<style>

</style>

