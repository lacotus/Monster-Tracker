<template>
	
	<!-- Two container divs. First is window width, second contains logic -->
	<div class="main centered-content" style="overflow: hidden;">
		<div class="container">
			
			<!-- Widgets that control logic -->
			<label class="welcome-label">Welcome to Monster Tracker!</label>
			<label style="text-align: left; font-size: 1vw; margin-left: 3vw; width: 90%;">Please sign in:</label>
			<!--<label style="margin-top: 3vh;">Username:</label>-->
			<input 
				v-bind:class="{'border-black': validUsername, 'border-red': !validUsername}"
				v-model="username" 
				v-on:keyup.enter="loginFunction()"
				placeholder="Username...">
			<!--<label style="margin-top: 3vh;">Password:</label>-->
			<input 
				v-bind:class="{'border-black': validPassword, 'border-red': !validPassword}"
				v-model="password" 
				v-on:keyup.enter="loginFunction()"
				type="password" 
				style="margin-top: 1vh;" 
				placeholder="Password...">
			<button v-on:click="loginFunction()" class="border-black">Login</button>
			<button v-on:click="gotoCreateAccount()" class="border-black">Create Account</button>
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
			numberOfUsers: 0,

			// Variables for validation (specifically used for setting border class color)
			validUsername: true,
			validPassword: true
		}
	},
	methods: {
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
		gotoCreateAccount() {
			this.$router.push('createuser')
		},
		loginFunction() {
			
			if (this.validation() == true) {
				
				// variable for testing if a username was found
				var usernameFound = false

				// for loop circles through all items in users[], first if statement looks for username, second compares the 
				// password to the username if found
				for (let i = 0; i < this.numberOfUsers; i++) {
					if (this.users[i].strUsername == this.username) {
						if (this.users[i].strPassword == this.password ) {
							console.log('intUserID: ', this.users[i].intUserID)
							this.$emit('update', this.users[i].intUserID)
							this.$router.push('home')
						} else {
							console.log('users[i]: ', this.users[i])
							alert('Password incorrect')
						}
						usernameFound = true
					}
				}

				// If no username is found change border color and alert the user
				if (usernameFound == false) {
					this.validUsername = false
					alert('Username not found')	
				}
			}

		},

		// Validation
		validation() {

			// Reset validation variables
			this.validUsername = true
			this.validPassword = true

			// Run individual validation functions
			if (this.validateUsername() == true) {
				if (this.validatePassword() == true) {
					return true

				} else {
					return false

				}
			} else {
				return false

			}

		},
		validateUsername() {
			
			// Check that there is something entered for username
			if (this.username != '') {
				this.validUsername = true
				return true

			} else {
				this.validUsername = false
				alert('Please enter a username.')
				return false
			
			}

		},
		validatePassword() {
			
			// Check that there is something entered for password
			if (this.password != '') {
				this.validPassword = true
				return true

			} else {
				this.validPassword = false
				alert('Please enter a password.')
				return false
			
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
		padding-left: 2vw;
		width: 80%;
	}

	/* Classes */
	.border-black {	
		border: 2px solid black; 
		border-radius: 5px;
	}
	
	.border-black:focus {	
		border: 2px solid black;
		border-radius: 5px;
		box-shadow: none;
		outline-style: none;
	}
	
	.border-red {	
		border: 2px solid red;
		border-radius: 5px;
	}
	
	.border-red:focus {	
		border: 2px solid red;
		border-radius: 5px;
		box-shadow: none;
		outline-style: none;
	}

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

