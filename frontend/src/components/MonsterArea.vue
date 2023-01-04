<template>


</template>

<script>
import MonsterInstance from './MonsterInstance.vue'
import Weapon from './MonsterInstanceComponents/Weapon.vue'
import Vue from 'vue'

export default {	
	name: 'MonsterArea',
	components: {
		'monster-instance': MonsterInstance,
		'weapon': Weapon
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
			var ComponentClass = Vue.extend(MonsterInstance)
			var instance = new ComponentClass({
				propsData: { title: this.count }
			})
			instance.$mount() // pass nothing. Why? I don't know, lol
			this.$refs.container.appendChild(instance.$el)
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

