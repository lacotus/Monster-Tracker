<template>
	<div id="MonsterContainer" ref="MonsterContainer" class="MonsterContainer">

		<!-- Top bar -->
		<div id="divTopBar" class="row" ref="divTopBar" style="height: 25%">

			<!-- Name input -->
			<div id="row" class="centerContent name">
				<textarea 	id="inpName" 
							ref="inpName"
							class="input" 
							placeholder="Name..." 
							type="text" 
							v-model="monsterName"
							:style="inpStyleObject"></textarea>
			</div>

			<!-- Settings button -->
			<div class="centerContent" @click="changePages" style="width: 12.5%; height: 100%;">
				<img src="@/assets/cog.png" ref="cogImg" />
			</div>

			<!-- Check input -->
			<div id="divCheckbox" class="centerContent" style="width: 7.5%; height: 100%;">
				<input id="chkCheckbox" type="checkbox" style="width: 15px; height: 15px;">
			</div>
	
		</div>
	
		<!-- Bottom bar -->
		<component v-bind:is="component"></component>

		<!-- Measure inpName text width -->
		<div 	id="inpMeasureText" 
				ref="inpMeasureText" 
				class="testBackground2" 
				style="fontFamily: 'Cutive'; fontSize: 30px;"></div>

	</div>
</template>

<script>
import Page1 from './Page1.vue'
import Page2 from './Page2.vue'
import { ref, watchEffect } from 'vue'

export default {
	name: 'MonsterInstance',
	components: {
		'page-one': Page1,
		'page-two': Page2
	},
	computed: {},
	data() {
		return {
			component: 'page-one',
			monsterName: this.monsterObject.strName,

			inpStyleObject: {
				fontSize: '30px',
				fontFamily: 'Cutive'
			},
			width: '',
			height: '',
			smallText: false
		}
	},
	methods: {
		calcCogSize: function() {
			// This is to set the height of the png in the setting button of the top bar {	
			let height = this.$refs.divTopBar.clientHeight - 20;
	
			this.$refs.cogImg.width = height;
			this.$refs.cogImg.height = height;

			console.log({ height });
		},
		calcTextWidth: function() {
				
			// Build test element, set it's fontSize, then set it's content
			var el = this.$refs.inpMeasureText
			el.innerHTML = this.$refs.inpName.value
			
			// Setup width variables
			var totalWidth = this.$refs.inpName.clientWidth
			var textWidth = el.clientWidth

			// Output (for testing)
			//console.log('monster: ', this.$refs.inpName.value, '\ntextWidth: ', textWidth, '\ntotalWidth: ', totalWidth)

			// Test if the input text is greater than the total width, run setInputWidth
			if (textWidth > totalWidth && this.smallText == false) {
				this.smallText = true
				this.setInputWidth('small')
			} else if (textWidth < totalWidth && this.smallText == true) {
				this.smallText = false
				this.setInputWidth('big')
			}
				
		},
		displayComponent: function() {
			console.log(this.component);
		},
		changePages: function() {
			if (this.component == 'page-one') {
				this.component = 'page-two';
			} else {
				this.component = 'page-one';
			}
		},
		getDimensions: function() {
			this.width = window.innerWidth
			this.height = window.innerHeight
			console.log('width: ', this.width, '\nheight: ', this.height)
		},
		setInputWidth: function(size) {
			
			// Set new textSize by 1 - grab current textSize from inpStyle object, 
			// 2 - perform logic (either divide or multiply by 2), 3 - to console for testing, 
			// 4 - set new style based on logic performed in line 2
			var oldFontSize = this.inpStyleObject.fontSize.replace('px', '')
			var newFontSize = size == 'small' ? oldFontSize / 2 : oldFontSize * 2
			//console.log('oldFontSize: ', oldFontSize, '\nnewFontSize: ', newFontSize)
			this.inpStyleObject.fontSize = newFontSize + 'px'

		}
	},
	mounted: function () {
		
		// Set first component to Page1
		this.currentComponent = this.component

		// Calculate size for the cog png
		this.calcCogSize()
		
		// Run calcTextWidth on creation of component
		this.calcTextWidth()

		// Event listener for window resizing
		window.addEventListener('resize', this.calcTextWidth)
	
	},
	unmounted: function() {
		
		// Remove event listener
		window.removeEventListener('resize', this.getDimensions)

	},
	props: {
		monsterObject: {
			type: Object,
			required: true
		}
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
		resize: none;
		outline: none;
        width: 95%;
		height: 100%;

		margin-top: 20px;


		/* Hide the scrollbar */
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		overflow: -moz-scrollbars-none; /* Firefox */
		overflow: hidden; /* Chrome and Safari */
	}

	
	.MonsterContainer {
		border-color: black;
		border-radius: 10px;
		border-style: solid;
		border-width: 3px;
		display: flex;
		flex-direction: column;
		width: 30vw;
		height: 35vh;
		z-index: 1;
	}

	.name {
		width: 80%;
		height: 100%;
	}

	.row {
		display: flex;
		flex-direction: row;
		width: 100%;
		align-items: right;
	}

	#inpMeasureText {
		position: absolute;
		visibility: hidden;
		height: auto;
		width: auto;
		white-space: nowrap;
	}

	.testBackground {
		background-color: yellow;
	}

	.testBackground2 {
		background-color: green;
	}

</style>

