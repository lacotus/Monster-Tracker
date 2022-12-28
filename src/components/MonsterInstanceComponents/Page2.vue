<template>
	<div id="Page2Container" class="row" style="height: 75%;" >
		<!-- Key: 
				sa = Special Abilities
				as = Ability Scores
		-->

		<!-- Special ablilities -->
		<div id="saContainer" >

		</div>

		<div id="asContainer" class="row" style="border-radius: 0px 0px 10px 0px" >
			
			<!-- Column 1, for labels -->
			<div id="col1" ref="col1" class="column testBackground" style="width: 50%;">
				
				<!-- STR -->
				<div ref="lblStr" class="asLabelContainer centerContent testBackground2">
					<label class="asLabel">STR</label>
				</div>

				<!-- DEX -->
				<div ref="lblDex" class="asLabelContainer centerContent">
					<label class="asLabel" style="width: 50%;" >DEX</label>
				</div>

				<!-- CON -->
				<div ref="lblCon" class="asLabelContainer centerContent">
					<label class="asLabel" style="width: 50%;" >CON</label>
				</div>

				<!-- INT -->
				<div ref="lblInt" class="asLabelContainer centerContent">
					<label class="asLabel" style="width: 50%;" >INT</label>
				</div>

				<!-- WIS -->
				<div ref="lblWis" class="asLabelContainer centerContent">
					<label class="asLabel" style="width: 50%;" >WIS</label>
				</div>

				<!-- CHA -->
				<div ref="lblCha" class="asLabelContainer centerContent">
					<label class="asLabel" style="width: 50%;" >CHA</label>
				</div>
			
			</div>
			
			<!-- Column 2, for inputs -->
			<div id="col2" class="column" style="width: 50%;">

				<div class="asItemSize"><input style="width: 90%; height: 100%;" ></div> <!-- STR -->
				<div class="asItemSize"><input style="width: 90%; height: 100%;" ></div> <!-- DEX -->
				<div class="asItemSize"><input style="width: 90%; height: 100%;" ></div> <!-- CON -->
				<div class="asItemSize"><input style="width: 90%; height: 100%;" ></div> <!-- INT -->
				<div class="asItemSize"><input style="width: 90%; height: 100%;" ></div> <!-- WIS -->
				<div class="asItemSize"><input style="width: 90%; height: 100%;" ></div> <!-- CHA -->

			</div>
					
		</div>

	</div>
</template>

<script>

export default {
	name: 'page-two',
	mounted: function() {
		
		// Calculate asItem height
		let totalHeight = this.$refs.col1.clientHeight;
		let itemHeight = (totalHeight / 6) - 10;

		// Set asItem height
		this.$refs.lblStr.width = itemHeight;
		this.$refs.lblStr.height = itemHeight; 
		this.$refs.lblDex.height = itemHeight;

		console.log(totalHeight, itemHeight);
	}
}

</script>

<style>

	/* Classes */
	.asItemSize {
		width: 50%;
	}

	.asLabelContainer {
		background-color: black;
		border-radius: 5px;
	}

	.asLabel {
		color: white;
	}

	.centerContent {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	.column {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.row {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	.testBackground {
		background-color: yellow;
	}

	.testBackground2 {
		background-color: green;
	}

	/* ID Selector */
	#asContainer {
		width: 33.3%;
		height: 100%;
	}	

	#asContainer > * {
		margin-top: 7.5px;
		margin-bottom: 7.5px;
	}

	#saContainer {
		width: 66.6%;
		height: 100%;
	}

</style>

