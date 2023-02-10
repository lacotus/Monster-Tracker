<template>

	<div class="bl-container">

		<div class="bl-header">
			<label class="bl-label align-vertical">Battle Lists</label>
			<button class="bl-button align-vertical" v-on:click="addMonster()">add</button>
		</div>
		<div class="bl-main-area">
			<div v-for="(battle, index) in battles">
				<BattleItem 
					class="bl-battle-item" 
					v-on:click="gotoBattle(battles[index].intBattleID)"
					:battleName="battles[index].strName" 
					:description="battles[index].strDescription" />
			</div>
		</div>

	</div>
</template>

<script>
import {getUserBattles, updateUserID} from '@/services/UserServices'
import BattleItem from './BattleItem'

export default {
	name: 'BattleLists',
	data() {
		return {
			counts: 1,
			battles: [],
		
			// test variables, delete later
			name: 'name',
			description: 'description'
		}
	},
	components: {
		BattleItem
	},
	methods: {
		addMonster() {
			this.counts ++
		},
		getUserBattles() {
			getUserBattles().then(response => {
				battles = response
				console.log(response)
			})
		},
		gotoBattle(battleID) {
			var alertMessage = 'battleID: ' + battleID
			alert(alertMessage)
		},
		startupFunction() {
			updateUserID({ userID: this.$parent.userID }).then(response => { console.log(response.msg) })
			getUserBattles().then(response => { 
				console.log('response: ', response) 
				this.battles = response
				console.log('battles[0][1]: ', this.battles[0].strName)
			})
		}
	},
	mounted: function() {
		this.startupFunction()
	}
}
</script>

<style>

	.align-vertical {
		margin-top: auto;
		margin-bottom: auto;
	}

	.bl-battle-item {
		margin-left: 12.5vw;
		width: 50vw;
		height: 10vh;
	}

	.bl-button {
		float: right;
		width: 10vw;
		height: 10vh;
	}

	.bl-header {
		background-color: black;
		display: flex;
		flex-direction: row;
		width: 100vw;
		height: 20vh;
	}

	.bl-label {
		color: white;
		margin-left: 42px;
		font-size: 30px;
	}

	.bl-main-area {
		border: 2px solid black;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		height: 75vh;
	}

	.bl-main-area > * {
		margin-top: 1vh;
		margin-bottom: 1vh;
	}

</style>

