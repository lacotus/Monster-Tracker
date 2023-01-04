<template>
	<div id="Page2Container" class="row" style="height: 75%;" >
		<!-- Key: 
				sa = Special Abilities
				as = Ability Scores
		-->

		<!-- Special ablilities -->
		<div id="saContainer" class="centerContent column">
			<label class="saLabel">Special Abilities</label>
			<div id="saInputContainer" style="width: 95%; height: 85%;">
				<textarea class="saTextarea" v-model="arrAllData.txtSpecialAbilities"></textarea>
			</div>
		</div>

		<div id="asContainer" class="row" style="border-radius: 0px 0px 10px 0px" >
			
			<!-- Column 1, for labels -->
			<div id="col1" ref="col1" class="column" style="width: 50%;">
				
				<!-- STR -->
				<div class="asItemSize asLabelContainer centerContent">
					<label class="asLabel" @click="displaySA()">STR</label>
				</div>

				<!-- DEX -->
				<div class="asItemSize asLabelContainer centerContent">
					<label class="asLabel" @click="saveData()">DEX</label>
				</div>

				<!-- CON -->
				<div class="asItemSize asLabelContainer centerContent">
					<label class="asLabel">CON</label>
				</div>

				<!-- INT -->
				<div class="asItemSize asLabelContainer centerContent">
					<label class="asLabel">INT</label>
				</div>

				<!-- WIS -->
				<div class="asItemSize asLabelContainer centerContent">
					<label class="asLabel">WIS</label>
				</div>

				<!-- CHA -->
				<div class="asItemSize asLabelContainer centerContent">
					<label class="asLabel">CHA</label>
				</div>
			
			</div>
			
			<!-- Column 2, for inputs -->
			<div id="col2" class="column" style="width: 50%;">

				<div class="asItemSize"><input style="width: 90%; height: 90%;" v-model="arrAllData.str"></div> <!-- STR -->
				<div class="asItemSize"><input style="width: 90%; height: 90%;" v-model="arrAllData.dex"></div> <!-- DEX -->
				<div class="asItemSize"><input style="width: 90%; height: 90%;" v-model="arrAllData.con"></div> <!-- CON -->
				<div class="asItemSize"><input style="width: 90%; height: 90%;" v-model="arrAllData.inn"></div> <!-- INT -->
				<div class="asItemSize"><input style="width: 90%; height: 90%;" v-model="arrAllData.wis"></div> <!-- WIS -->
				<div class="asItemSize"><input style="width: 90%; height: 90%;" v-model="arrAllData.cha"></div> <!-- CHA -->

			</div>
					
		</div>

	</div>
</template>

<script>

export default {
	name: 'page-two',
	data() {
		return {
			arrAllData: [{
				txtSpecialAbilities: '',
				str: '',
				dex: '',
				con: '',
				inn: '',
				wis: '',
				cha: ''
			}]
		};
	},
	methods: {
		saveData: function () {
			const data = JSON.stringify(this.arrAllData);
			window.localStorage.setItem('arrAllData', data);
			console.log(JSON.parse(window.localStorage.getItem('arrAllData')));
		}
	},
	mounted: function () {}
}

</script>

<style>

	/* Classes */
	.asItemSize {
		width: 50%;
	}

	.asItemSize {
		margin-top: 2.5%;
		margin-bottom: 2.5%;
		width: 100%;
		height: 14%;
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

	.column.around {
		justify-content: space-around;
	}

	.column.between {
		justify-content: space-between;
	}

	.row {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	.saLabel {
		color: black;
		font-family: "Cutive";
		width: 100%; 
		height: 10%;
	}

	.saTextarea {
		border: 1px solid black;
		border-radius: 5px;
		width: 100%;
		height: 95%;
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

