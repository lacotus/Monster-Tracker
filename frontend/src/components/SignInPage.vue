
<!-- 1-25-23: Page we're trying to make a new expressjs call in -->

<template>
	
	<!-- Two container divs. First is window width, second contains logic -->
	<div class="main centered-content" style="overflow: hidden;">
		<div class="container">
			
			<!-- Widgets that control logic -->
			<label class="welcome-label">Welcome to Monster Tracker!</label>
			<label style="text-align: left; font-size: 1vw; margin-left: 3vw; width: 90%;">Please sign in:</label>
			<!--<label style="margin-top: 3vh;">Username:</label>-->
			<input v-model="username" placeholder="Username...">
			<!--<label style="margin-top: 3vh;">Password:</label>-->
			<input v-model="password" type="password" style="margin-top: 1vh;" placeholder="Password...">
			<button v-on:click="loginFunction()">Login</button>
			<a href="https://www.google.com" style="margin-top: 10px;">Create account</a>
		</div>
	</div>

</template>

<script>
import {getAllUsers, createUser } from '@/services/UserServices'

export default {
	name: 'SignInPage',
	data() {
		return {
			username: '',
			password: '',
			users: [],
			numberOfUsers: 0
		}
	},
	methods: {
		existingUsername(username) {
			// For loop, compares existing usernames to the one being attempted
			for (let i = 0; i < this.numberOfUsers; i++) {
				var takenUsername = this.users[i].strUsername
				if (takenUsername == username) {
					return true
				}
			} 
			return false
		},
		startFunction() {
			this.getAllUsers(),
			this.getWindowDemensions()
		},
		getAllUsers() {
			getAllUsers().then(response => {
				console.log(response)
				this.users = response
				this.numberOfUsers = this.users.length
				console.log('Users: ', this.users)
				console.log('Number of users: ', this.numberOfUsers)
			})
		},
		getWindowDemensions() {
			var width = window.innerWidth;
			var height = window.innerHeight;
			
			console.log('Width and height: ', width, height)
		},
		getInputValues() {
			console.log(this.username, this.password)
		},
		loginFunction() {
			var usernameFound = false
			for (let i = 0; i < this.numberOfUsers; i++) {
				if (this.users[i].strUsername == this.username) {
					if (this.users[i].password == this.password ) {
						alert('Password correct')
						this.$parent.setBattlePage()
					} else {
						alert('Password incorrect')
					}
				}
				usernameFound = true
			} 
			if (usernameFound = false) {
				alert('Username not found')	
			}
		}
	},
	mounted: function() {
		this.startFunction()
	}
}
</script>

<style>

	/* Element specific CSS */
	a {
		margin-left: auto;
		margin-right: 4vw;
	}

	a:link {
		color: black;
	}

	a:active {
		color: blue;
	}

	a:visited {
		color: blue;
	}

	button {
		background: white;
		border: 2px solid black;
		border-radius: 5px;
		margin-top: 1vh;
		margin-left: auto;
		margin-right: 4vw;
		width: 12vw;
	}

	button:hover {
		background: black;
		color: white;
	}

	html, body {
		overflow: hidden;
	}

	label, input {
		color: black;
		font-family: "Cutive";
	}

	input {
		border: 2px solid black;
		border-radius: 5px;
		padding-left: 2vw;
		width: 80%;
	}

	/* Classes */
	.centered-content {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	.container {
		align-items: center;
		border: 3px solid black;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 40%;
		height: 90%;
	}

	.main {
		width: 100vw;
		height: 100vh;
	}

	.test-background-1 {
		background: yellow;
	}

	.test-background-2 {
		background: green;
	}

	.welcome-label {
		font-size: 3vw;
		padding-top: 10vh;
		height: 50%;
	}

</style>

