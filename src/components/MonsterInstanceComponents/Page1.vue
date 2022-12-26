<template>
	<div id="pg1Container" class="row" style="width: 100%; height: 75%;">

		<!-- Attacks Scrollbar -->
		<div id="divAttacks" class="attacks" style="width: 66.6%; height: 100%; border-top: 2px solid black; overflow: hidden;">

			<div id="attacksTopBar" class="row" style="padding-top: 5px;">
				<div style="width: 30%; height: 10%;"><label class="attacksLabel">Name</label></div>
				<div style="width: 20%; height: 10%;"><label class="attacksLabel">Bonus</label></div>
				<div style="width: 30%; height: 10%;"><label class="attacksLabel">Damage</label></div>
				<div style="width: 20%; height: 10%;"><button class="attacksButton bordered">+</button></div>
			</div>

			<div id="attacksScroller"></div>			

		</div>

		<!-- Info Container -->
		<div id="divInfoContainer" class="bordered" style="border-radius: 0px 0px 10px 0px; width: 33.3%; height: 100%;">

			<!-- HP -->
			<div class="row" style="width: 100%; height: 33.3%;">
				<label class="centered infoContainerLabel rowItemSize fonts">HP</label>
				<input ref="hpInput" class="input rowItemSize fonts" type="text">
			</div>

			<!-- AC -->
			<div class="row" style="width: 100%; height: 33.3%;">
				<input ref="acInput" class="input rowItemSize fonts" type="text">
				<label class="centered infoContainerLabel rowItemSize fonts">AC</label>
			</div>

			<!-- INT -->
			<div class="row" style="width: 100%; height: 33.3%;">
				<label class="centered infoContainerLabel rowItemSize fonts">INT</label>
				<input ref="intInput" class="input rowItemSize fonts background" type="text">
			</div>			

		</div>
		
	</div>
</template>

<script>

export default {
	name: 'page-one'
}

</script>

<style>

	.attacks {
		overflow-y: scroll;
		width: 73.3%;
		height: 100%;
	}

	.attacksButton {
		background-color: white;
		border-radius: 15px;
		font-size: 30px;
		padding: 0px 0px 0px 0px;
		text-align: center;
		width: 30px;
		height: 30px;
	}

	.attacksLabel {
		color: black;
		text-decoration: underline;
	}

	.background {
		z-index: -1;
	}
	
	.bordered {
		border: 1px solid black;
	}

	.centered {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	.fonts {
		font-family: "Cutive";
		font-size: 25px;
	}

	.input {
		border: 0px;
		outline: none;
		padding: 0px;
		text-align: center;
	}

	.infoContainerLabel {
		background-color: black;
		color: white;
	}

	.row {
		display: flex;
		flex-direction: row;
	}

	.rowItemSize {
		width: 50%;
		height: 100%;
	}

	.textBorder {
		border: 2px solid red;
	}

</style>

