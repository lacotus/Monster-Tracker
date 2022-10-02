<template>

	<div id="monsterAreaContainer" class="container">
		<div id="flexBox" class="flexBox">
			<component :is="component"></component>
			<Button class="tempButton">Temp button</Button>
		</div>
	</div>

</template>

<script>

export default {	
	name: 'MonsterArea',
	computed: {
		component: function() {
			return 'monsterInstance';
		}
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
			document.getElementById('monsterAreaContainer').style.height = mainHeight + 'px';
			console.log('Window Height: ' + mainHeight);
		},

		addMonster() {
			
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
		border-color: black;
		border-style: solid;
		border-width: 3px;
	}

	.flexBox {
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
	.tempbutton {
		width: 50px;
		height: 50px;
	}
</style>

