<template>
	<div id="MonsterContainer" class="MonsterContainer">

		<!-- Top bar -->
		<TitleBar />
		
		<!-- Bottom bar -->
		<component v-bind:is="component"></component>

	</div>
</template>

<script>
import TitleBar from './MonsterInstanceComponents/TitleBar.vue'
import Page1 from './MonsterInstanceComponents/Page1.vue'
import Page2 from './MonsterInstanceComponents/Page2.vue'

export default {
	name: 'MonsterInstance',
	components: {
		'page-one': Page1,
		'page-two': Page2,
		'title-bar': TitleBar
	},
	data() {
		return {
			component: 'page-one'
		}
	},
	methods: {},
	mounted: function() {},
	props: {
		title: String
	}
}

</script>

<style>
	
	.MonsterContainer {
		border-color: black;
		border-radius: 10px;
		border-style: solid;
		border-width: 3px;
		display: flex;
		flex-direction: column;
		width: 600px;
		height: 320px;
	}

</style>

