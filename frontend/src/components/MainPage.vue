<template>

	<div class="main">
		<div class="mp-container">

			<h1>{{ this.$route.params.test }}</h1>
			<label>Welcome, traveler!<br><br>Choose your path:</label>
			<button class="mp-button" v-on:click="gotoBattleLists()">Battle Lists</button>
			<button class="mp-button" v-on:click="gotoCustomMonster()">Custom NPCs</button>

		</div>
	</div>

</template>

<script>
export default {
	name: 'MainPage',
	data() {
		return {
			userID: ''
		}
	},
	computed: {
		getData() {
			var data = this.$route.params.test
			return data
		}
	},
	methods: {
		getParams() {
			console.log(this.$route.params)
		},
		gotoBattleLists() {
			this.$router.push('battlelist')
		},
		gotoCustomMonster() {
			this.$parent.setCustomMonster()
		}
	},
	mounted: function() {
		console.log('\n==============\n== MainPage ==\n==============\n')
		//this.userID = this.$route.params.userID
		//console.log('Route object: ', this.$route)
		console.log('UserID passed into MainPage: ', this.$route.params)
		this.getParams()
	}
}
</script>

<style>

	.mp-button {
		background: white;
		border: 2px solid black;
		border-radius: 5px;
		font-family: "Cutive";
		margin-left: auto;
		margin-right: auto;
		width: 30vw;
		height: 6vh;
	}

	.mp-container {
		align-items: center;
		border: 2px solid black;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 40vw;
		height: 90vh;
	}

	.main {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh;
	}

	.test-background-1 {
		background-color: yellow;
	}

</style>

