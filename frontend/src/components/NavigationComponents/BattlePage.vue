<template>
	<div id="container">

		<div id="header" class="Header">
			<div id="title" class="TitleStyle">Monster Tracker</div>
			<div id="closeButton"><button class="ButtonStyle" v-on:click="getAllUsers()">close</button></div>
			<div id="addButton"><button class="ButtonStyle">add</button></div>
		</div>	

		<div class="bp-main-area">
			<div v-for="(count, index) in counts">
				<MonsterInstance :monsterObject="monsters[index]" />
			</div>
		</div>

	</div>
</template>

<script>
import {getMonsterBattles} from '@/services/UserServices'
import MonsterInstance from '../MonsterInstanceComponents/MonsterInstance'

export default {
	name: 'BattlePage',
	data() {
		return {
			battleID: '',
			counts: 0,
			monsters: []
		}
	},
	components: {
		MonsterInstance
	},   
	methods: {
		startupFunction() {
			// Grab battleID, display to console, then set this.battleID, then store in window
			console.log('=================\n== Battle Page ==\n=================')
			console.log('battleID: ', window.sessionStorage.getItem('battleID'))
			this.battleID = window.sessionStorage.getItem('battleID')
			window.sessionStorage.setItem('battleID', this.battleID)
			
			// Make db call
			getMonsterBattles().then(response => {
				console.log('response: ', response)
				this.monsters = response
				this.counts = this.monsters.length
				console.log('monsters: ', this.monsters, '\ncounts: ', this.counts)
			})
		
			// Set component data
			
		}
	},
	mounted: function() {
		this.startupFunction()
	}
}
</script>

<style>

	#title, #closeButton, #addButton {display: inline-block; *display: inline; vertical-align: top;}

	#closeButton, #addButton {
		float: right;
		margin-left: 5px;
		margin-right: 5px;
	}

	
	#title {
		font-family: "Cutive";
		font-size: 30px;
		line-height: 50px;	
	}

	.ButtonStyle {
		font-family: "Cutive";
		width: 60px;
		height: 30px;
		margin-top: 10px;
	}
    
	.Header {
		height: 50px;
		background-color: black;
		color: white;
		padding: 25px;
		text-align: left;
    
	}

	.TitleStyle {
		line-height: 30px;
	}

</style>

