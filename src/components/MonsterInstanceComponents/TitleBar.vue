<template>

	<div id="divTopBar" class="claRow" style="height: 80px">
	
		<!-- Name input -->
		<div id="claRow" class="centeredContent claName">
			<input id="inpName" class="claInput" type="text">
		</div>
     
		<!-- Settings button -->
		<Button id="btnSettings" class="claSettings bordered"></Button>
  
		<!-- Check input -->
		<div id="divCheckbox" class="centeredContent" style="width: 13.3%; height: 100%;">
			<input id="chkCheckbox" type="checkbox" style="width: 15px; height: 15px;">
		</div>
	
	</div>

</template>

<script>

export default {
	name: 'title-bar'
}

</script>

<style>

	.bordered {
		border: 1px solid black;
	}

   .claInput {
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


	.claSettings {
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

	.claName {
		padding-left: 20px;
		width: 73.3%;
		height: 100%;
	}

	.claRow {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

</style>

