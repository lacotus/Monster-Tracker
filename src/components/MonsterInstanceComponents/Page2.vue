<template>
	<div id="Page2Container" class="row" style="height: 75%;" >
		<!-- Key: 
				as = Ability Scores
		-->

		<!-- Special ablilities -->
		<div id="saContainer" >

		</div>

		<div id="asContainer" class="" style="border-radius: 0px 0px 10px 0px" >
			<div id="rowStr" class="row" style="width: 100%; height: 12.5%;" >
				<div class="asItemSize asLabelContainer"><label class="asLabel centerContent" style="width: 50%;" >STR</label></div>
				<div class="asItemSize"><input style="width: 90%; height: 100%;" ></div>
			</div>
			
			<div id="rowDex" class="row" style="width: 100%; height: 12.5%;" >
				<div class="asItemSize asLabelContainer"><label class="asLabel" style="width: 50%;" >DEX</label></div>
				<div class="asItemSize"><input style="width: 90%; height: 100%;" ></div>	
			</div>
			
			<div id="rowCon" class="row" style="width: 100%; height: 12.5%;" >
				<div class="asItemSize asLabelContainer"><label class="asLabel" style="width: 50%;" >CON</label></div>
				<div class="asItemSize"><input style="width: 90%; height: 100%;" ></div>
			</div>
			
			<div id="rowInt" class="row" style="width: 100%; height: 12.5%;" >
				<div class="asItemSize asLabelContainer"><label class="asLabel" style="width: 50%;" >INT</label></div>
				<div class="asItemSize"><input style="width: 90%; height: 100%;" ></div>
			</div>
			
			<div id="rowWis" class="row" style="width: 100%; height: 12.5%;" >
				<div class="asItemSize asLabelContainer"><label class="asLabel" style="width: 50%;" >WIS</label></div>
				<div class="asItemSize"><input style="width: 90%; height: 100%;" ></div>
			</div>
			
			<div id="rowCha" class="row" style="width: 100%; height: 12.5%;" >
				<div class="asItemSize asLabelContainer"><label class="asLabel" style="width: 50%;" >CHA</label></div>
				<div class="asItemSize"><input style="width: 90%; height: 100%;" ></div>
			</div>
		</div>

	</div>
</template>

<script>

export default {
	name: 'page-two',
	mounted: function() {
		
		// Calculate 
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

