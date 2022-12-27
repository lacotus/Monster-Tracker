<template>
	<div id="pg1Container" class="row" style="width: 100%; height: 75%;">

		<!-- Attacks Scrollbar -->
		<div id="divAttacks" class="attacks" style="width: 66.6%; height: 100%; border-top: 2px solid black; overflow: hidden;">

			<div id="attacksTopBar" class="row" style="padding-top: 5px;">
				<div style="width: 30%; height: 10%;"><label class="attacksLabel">Name</label></div>
				<div style="width: 20%; height: 10%;"><label class="attacksLabel">Bonus</label></div>
				<div style="width: 30%; height: 10%;"><label class="attacksLabel">Damage</label></div>
			
				<a ref="plusContainer" @click="addWeapon()" class="plusSize alignRight">
					<img src="@/assets/plus.png" ref="plusImg" class="plusSize" />
				</a>

			</div>

			<div id="attacksScroller">
				<div v-for="component in componentsList" :key="component.id" >
					<component :is="weapon-component" />
				</div>
			</div>

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
				<input ref="intInput" class="input rowItemSize fonts" type="text" style="border-radius: 10px 10px 10px 10px;">
			</div>			

		</div>
		
	</div>
</template>

<script>
import WeaponComponent from './Weapon.vue'

export default {
	name: 'page-one',
	data() {
		return {
			componentsList: ['weapon-component']
		}
	},
	components: {
		'weapon-component': WeaponComponent
	},
	methods: {
		addWeapon: function() {
			this.componentsList.push('weapon-component');

			console.log("addWeapon was ran!");
			console.log(this.componentsList);
		}
	}
}

</script>

<style>

	.alignRight {
		margin-left: auto;
		margin-right: 15px;
	}

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
		font-family: "Cutive";
		font-size: 20px;
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

	.plusSize {
		width: 30px;
		height: 30px;
	}

	.row {
		display: flex;
		flex-direction: row;
	}

	.rowItemSize {
		width: 50%;
		height: 100%;
	}

	.testBackground {
		background-color: yellow;
	}

	.testBackground2 {
		background-color: green;
	}

	.textBorder {
		border: 2px solid red;
	}

</style>

