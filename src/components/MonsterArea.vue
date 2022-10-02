<template>
	<div id="main" class="main" v-bind:style="MainHeightStyle">Monster Area</div>
</template>

<script>

import MonsterInstance from './MonsterInstance.vue'

export default {	
	name: 'MonsterArea',
	components: {
		MonsterInstance
	},
	created: function() {
		window.addEventListener("resize", this.calcHeight);
	},	
	props: {},
	methods: {
		calcHeight() {
			// Function gets window height, subtracts height for the header and padding, then sets that
			// height to the container div
			var mainHeight = window.innerHeight;
			mainHeight = mainHeight - 125; /* MainTitle height plus a little extra to account for padding */
			document.getElementById('main').style.height = mainHeight + 'px';
			console.log('Window Height: ' + mainHeight);
		},

		addMonster() {
			var instance = new MonsterInstance();
			instance.$mount()
			var rent = document.getElementById('main')
			rent.appendChild(instance.$el)
		}
	},
	mounted: function()  {
		this.calcHeight();
		this.$root.$on('NewMonster', () => {
			this.addMonster()
		});
		this.addMonster()
	},
	unmounted: function() {
		window.removeEventListener("resize", this.calcHeight);
	}
}

</script>

<style>
	.container {
		display: flex;
		flex-flow: row wrap;
	}

	.main {
		border-color: black;
		border-style: solid;
		border-width: 3px;
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
	}
</style>

