<template>

	<div id="pg1Container" class="claRow" style="width: 100%; height: 75%;">

		<!-- Attacks Scrollbar -->
		<div id="divAttacks" class="claAttacks" style="width: 66.6%; height: 100%; border-top: 2px solid black; overflow: hidden;">

			<div id="attacksTopBar" class="claRow" style="padding-top: 5px;">
				<div style="width: 30%; height: 10%;"><label class="claAttacksLabel">Name</label></div>
				<div style="width: 20%; height: 10%;"><label class="claAttacksLabel">Bonus</label></div>
				<div style="width: 30%; height: 10%;"><label class="claAttacksLabel">Damage</label></div>
				<div style="width: 20%; height: 10%;"><button class="claAttacksButton bordered">+</button></div>
			</div>

			<div id="attacksScroller"></div>			

		</div>

		<!-- Info Container -->
		<div id="divInfoContainer" class="bordered" style="border-radius: 0px 0px 10px 0px; width: 26.7%; width: 33.3%; height: 100%;">

			<div class="claRow" style="width: 100%; height: 33.3%;"><label class="centered claInfoContainerLabel rowItemSize fonts">HP</label><input class="claInput rowItemSize fonts" type="text"></div>			
			<div class="claRow" style="width: 100%; height: 33.3%;"><input class="claInput rowItemSize fonts" type="text"><label class="centered claInfoContainerLabel rowItemSize fonts">AC</label></div>
			<div class="claRow" style="width: 100%; height: 33.3%;"><label class="centered claInfoContainerLabel rowItemSize fonts">INT</label><input class="claInput rowItemSize fonts" style="z-index: -1;" type="text"></div>			

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

	.claAttacksButton {
		background-color: white;
		border-radius: 15px;
		font-size: 30px;
		padding: 0px 0px 0px 0px;
		text-align: center;
		width: 30px;
		height: 30px;
	}

	.claInput {
		border: 0px;
		outline: none;
		padding: 0px;
		text-align: center;
	}

	.claInfoContainerLabel {
		background-color: black;
		color: white;
	}

	.claRow {
		display: flex;
		flex-direction: row;
	}

	.claAttacksLabel {
		color: black;
		text-decoration: underline;
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

