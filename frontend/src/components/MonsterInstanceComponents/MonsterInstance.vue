<template>
	<div id="MonsterContainer" ref="MonsterContainer" class="MonsterContainer">

		<!-- Top bar -->
		<div id="divTopBar" class="row" ref="divTopBar" style="height: 25%">

			<!-- Name input -->
			<div id="row" class="centerContent name">
				<TextArea 	id="inpName" 
							class="input" 
							placeholder="Name..." 
							type="text" 
							:value="nameValue"
							v-on:input="calcTextWidth" />
			</div>

			<!-- Settings button -->
			<div class="centerContent testBackground" @click="changePages" style="width: 12.5%; height: 100%;">
				<img src="@/assets/cog.png" ref="cogImg" />
			</div>

			<!-- Check input -->
			<div id="divCheckbox" class="centerContent testBackground2" style="width: 7.5%; height: 100%;">
				<input id="chkCheckbox" type="checkbox" style="width: 15px; height: 15px;">
			</div>
	
		</div>
	
		<!-- Bottom bar -->
		<component v-bind:is="component"></component>

		<!-- Measure inpName text width -->
		<div id="inpMeasureText"></div>

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
	computed: {
		nameValue() {
			return this.monsterObject.strName
		}
	},
	data() {
		return {
			component: 'page-one',
			textWidth: ''
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
			// Get fontSize for inpName
			var style = window.getComputedStyle(document.getElementById('inpName')).fontSize
			var fontSize = parseFloat(style)

			// Build test element, set it's fontSize, then set it's content
			var el = document.getElementById('inpMeasureText')
			el.style.fontSize = fontSize;
			el.innerHTML = document.getElementById('inpName').value
			
			// Setup width variables
			var totalWidth = document.getElementById('inpName').clientWidth / 3
			this.textWidth = el.clientWidth

			// Output (for testing)
			console.log('Total width: ', totalWidth, '\nthis.textWidth: ', this.textWidth)

			// Test if the input text is greater than the total width, run setInputWidth
			if (this.textWidth > totalWidth) {
				this.setInputWidth()
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
		setInputWidth: function() {
			// Setup variables
			var input = document.getElementById('inpName')
			var inputText = input.value
			var textArray = inputText.split(' ')
			var wordCount = textArray.length

			// Calculate break point entering, splice in at that point
			var breakPoint = (wordCount - 1) / 2
			if (breakPoint % 1 != 0) { breakPoint = breakPoint + .5}
			console.log('breakPoint', breakPoint)
			var newContent = '\n'
			textArray.splice(breakPoint, 0, newContent)

			// Set new textSize
			var oldFontSize = window.getComputedStyle(input).fontSize
			oldFontSize = oldFontSize.replace('px', '')
			var newFontSize = oldFontSize / 2
			console.log('oldFontSize: ', oldFontSize, '\nnewFontSize: ', newFontSize)
			input.style.fontSize = String(newFontSize) + 'px'
			input.value = textArray.join() 

			// Output (for testing)
			console.log('inputText: ', inputText, '\nwordCount: ', wordCount, '\nNew string: ', textArray.join())
		}
	},
	mounted: function () {
		
		// Set first component to Page1
		this.currentComponent = this.component

		// Calculate size for the cog png
		this.calcCogSize()

		this.calcTextWidth()
	
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
    	background-color: yellow;
	    border: 0px;
		font-family: "Cutive";
        font-size: 30px;
        outline: none;
        width: 95%;
		height: 100%;

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

