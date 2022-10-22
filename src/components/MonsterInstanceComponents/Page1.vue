<template>

	<div id="pg1Container" class="claRow" style="height: 100%">

		<!-- Attacks Scrollbar -->
		<div id="divAttacks" class="claAttacks" style="width: 66.6%; height: 100%;">
			
		</div>

		<!-- Info Container -->
		<div id="divInfoContainer" class="bordered" style="border-radius: 0px 0px 10px 0px; width: 26.7%; width: 33.3%; height: 100%;">

			<div class="claRow" style="height: 33.3%"><label class="centered claLabel rowItemSize fonts">HP</label><input class="claInput rowItemSize fonts" type="text"></div>			
			<div class="claRow" style="height: 33.3%"><input class="claInput rowItemSize fonts" type="text"><label class="centered claLabel rowItemSize fonts">AC</label></div>
			<div class="claRow" style="height: 33.3%"><label class="centered claLabel rowItemSize fonts">INT</label><input class="claInput rowItemSize fonts" type="text"></div>			

		</div>
		
	</div>

</template>

<script>

export default {
	name: 'page-one'
}

</script>

<style>
	
	.bordered {
		border: 1px solid black;
	}

	.centered {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	.claAttacks {
		overflow-y: scroll;
		width: 73.3%;
		height: 100%;
	}

	.claInput {
		border: 0px;
		outline: none;
		padding: 0px;
		text-align: center;
	}

	.claLabel {
		background-color: black;
		color: white;
	}

	.claRow {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	.fonts {
		font-family: "Cutive";
		font-size: 25px;
	}

	.rowItemSize {
		width: 50%;
		height: 100%;
	}

	.textBorder {
		border: 2px solid red;
	}

</style>

