<template>
	<div id="MonsterContainer" class="MonsterContainer">

		<!-- Top bar -->
		<div id="divTopBar" class="divRow" style="height: 80px">
			<!-- Name input -->
			<div id="divName" class="divNameC">
				<input id="inpName" class="inpNameC" type="text">
			</div>
	
			<!-- Settings button -->
			<Button id="btnSettings" class="btnSettingsC bordered"></Button>
	
			<!-- Check input -->
			<div id="divCheckbox" class="centeredContent" style="width: 13.3%; height: 100%;">
				<input id="chkCheckbox" type="checkbox" style="width: 15px; height: 15px;">
			</div>
		</div>

		<!-- Bottom bar -->
		<div id="divBottomBar" class="divRow" style="height: 75%">
			
			<!-- Weapons scrollbox -->
			<div id="scrWeapons" class="scrWeaponsC">
				
			</div>

			<!-- Info container -->
			<div id="divInfoContainer" class="bordered" style="border-radius: 0px 0px 10px 0px; width: 26.7%; height: 100%;">
				<div id="divICRow1" class="rowC"><label class="rowLabelC rowItemSize">HP</label><input class="rowInputC rowItemSize" type="text"></div>
				<div id="divICRow2" class="rowC"><input class="rowInputC rowItemSize" type="text"><label class="rowLabelC rowItemSize">AC</label></div>
				<div id="divICRow2" class="rowC"><label class="rowLabelC rowItemSize">INT</label><input class="rowInputC rowItemSize" type="text" style="border-radius: 0px 0px 15px 0px"></div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'MonsterInstance',
	methods: {},
	mounted: function() {}
}

</script>

<style>
	.bordered {
		border: 1px solid black;
	}

	.btnSettingsC {
		background-color: white;
		border-radius: 100%;	
		margin-left: 12.5px;
		margin-top: 12.5px;
		width: 9.975%;
		height: 75%;
	}

	.centeredContent {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	.divNameC {
		align-items: center;
		display: flex;
		padding-left: 20px;
		width: 73.3%;
		height: 100%;
	}

	.divRow {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	.inpNameC {
		border-color: black;
		border-style: solid;
		border-width: 0px 0px 2px 0px;
		font-family: "Cutive";
		font-size: 30px;
		outline: none;
		padding-left: 20px;
		width: 95%;
		height: 60%;
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
	}

	.rowC {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 33.3%;
	}

	.rowLabelC {
		align-items: center;
		background-color: black;
		color: white;
		display: flex;
		font-family: "Cutive";
		font-size: 25px;
		justify-content: center;
	}

	.rowInputC {
		border: 0px;
		font-family: "Cutive";
		font-size: 25px;
		outline: none;
		padding: 0px;
		text-align: center;
	}

	.rowItemSize {
		width: 50%;
		height: 100%;
	}

	.scrWeaponsC {
		overflow-y: scroll;
		width: 73.3%;
		height: 100%;
	}
</style>

