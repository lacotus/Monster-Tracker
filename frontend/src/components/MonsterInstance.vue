<template>
	<div id="MonsterContainer" class="MonsterContainer">

		<!-- Top bar -->
		<div id="divTopBar" class="row" ref="divTopBar" style="height: 25%">

			<!-- Name input -->
			<div id="row" class="centerContent name">
				<input id="inpName" class="input" placeholder="Name..." type="text">
			</div>

			<!-- Settings button -->
			<a ref="cogContainer" @click="changePages()" class="centerContent" >
				<img src="@/assets/cog.png" ref="cogImg" />
			</a>

			<!-- Check input -->
			<div id="divCheckbox" class="centerContent" style="width: 13.3%; height: 100%;">
				<input id="chkCheckbox" type="checkbox" style="width: 15px; height: 15px;">
			</div>
	
		</div>
	
		<!-- Bottom bar -->
		<component v-bind:is="component"></component>

	</div>
</template>

<script>
import Page1 from './MonsterInstanceComponents/Page1.vue'
import Page2 from './MonsterInstanceComponents/Page2.vue'

export default {
	name: 'MonsterInstance',
	components: {
		'page-one': Page1,
		'page-two': Page2
	},
	data() {
		return {
			component: 'page-one'
		}
	},
	methods: {
		displayComponent: function() {
			console.log(this.component);
		},
		changePages: function() {
			if (this.component == 'page-one') {
				this.component = 'page-two';
			} else {
				this.component = 'page-one';
			}
		}
	},
	mounted: function () {
		
		// Set first component to Page1
		this.currentComponent = this.component

		// This is to set the height of the png in the setting button of the top bar {	
		let height = this.$refs.divTopBar.clientHeight - 20;
	
		this.$refs.cogContainer.width = height;
		this.$refs.cogContainer.height = height;	
		this.$refs.cogImg.width = height;
		this.$refs.cogImg.height = height;

		console.log({ height });
		// }
		
	},
	props: {
		title: String,
	}
}

</script>

<style>

	.centerContent {
		align-items: center;
		display: flex;
		justify-content: center;
	}

   .input {
        border: 0px;
		font-family: "Cutive";
        font-size: 30px;
        outline: none;
        padding-left: 20px;
        width: 95%;
	}

	
	.MonsterContainer {
		border-color: black;
		border-radius: 10px;
		border-style: solid;
		border-width: 3px;
		display: flex;
		flex-direction: column;
		width: 600px;
		height: 320px;
		z-index: 1;
	}

	.name {
		padding-left: 20px;
		width: 73.3%;
		height: 100%;
	}

	.row {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

</style>

