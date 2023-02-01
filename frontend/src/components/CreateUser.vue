<template>

	<!-- Two container divs. First is window size, second contains logic -->
	<div class="main centered-content" style="overflow: hidden;">
		<div class="container">

			<!-- Widgets that control logic -->
			<label class="main-label">Please provide the following information to create your account</label>
			<label>Username</label>
			<input 	v-bind:class="{'border-black': validUsername, 'border-red':!validUsername}" 
					v-model="strUsername">
			<label>Password</label>
			<input 	v-bind:class="{'border-black': validPasswordOriginal, 'border-red': !validPasswordOriginal}"
					v-model="strPasswordOriginal" 
					type="password">
			<label>Confirm Password</label>
			<input 	v-bind:class="{'border-black': validPasswordConfirmation, 'border-red': !validPasswordConfirmation}"
					v-model="strPasswordConfirmation" 
					type="password">
			<button v-on:click="createUser()">Create</button>
			<button v-on:click="gotoSignInPage()">Cancel</button>
			
		</div>
	</div>

</template>

<script>
import {getAllUsers, createUser } from '@/services/UserServices'

export default {
	name: 'CreateUser',
	data() {
		return {
			// data for tracking old users
			users: [],
			numberOfUsers: '',

			// data for tracking new users
			strUsername: '',
			strPasswordOriginal: '',
			strPasswordConfirmation: '',
		
			validUsername: true,
			validPasswordOriginal: true,
			validPasswordConfirmation: true
		}
	},
	methods: {
		checkTakenUsername() {
			
			// for loop checks each taken username against those which already exist in the database, 
			// if none are found the loop ends and false is returned
			for (let i = 0; i < this.numberOfUsers; i++) {
				if (this.users[i].strUsername == this.strUsername) {
					return true
				}
			}
			return false

		},
		createUser() {

			// Check data integrity 
			if (this.validation()) {
				console.log('createUser input validated')
				const dataObject = { username: this.strUsername, password: this.strPasswordOriginal }
				createUser(dataObject).then(res => {
					console.log('res.msg: ', res.msg)
					if (res.msg == 'Created User') {
						alert("Created user")
						this.$parent.setMainPage()
					}})
				.catch(err => {
						console.error(err)
				})
			}
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
		gotoSignInPage() {
			this.$parent.setSignInPage()
		},

		// validation functions
		validation() {
			
			// Reset validation
			this.validUsername = true
			this.validPasswordOriginal = true
			this.validPasswordConfirmation = true

			// Run all three validation functions
			if (this.validateUsername()) {
				if (this.validatePasswordOriginal()) {
					if (this.validatePasswordConfirmation()) {
						if (this.validatePasswordsMatch()) {
							return true

						} else {
							return false
					
						}
					} else {
						return false

					}
				} else {
					return false

				}			
			} else {
				return false

			}	
	
		},
		validateUsername() {
		
			// first if: check username field for existing text, second if: check that username is not taken
		
			if (this.strUsername != '') {
				if (this.checkTakenUsername() == false) {
					this.validUsername = true
					return true
				
				} else {
					this.validUsername = false
					alert('Username taken, please select a new one')
					return false
		
				}
			} else {
				this.validUsername = false
				alert('Please enter a new username')
				return false
		
			}

		},
		validatePasswordOriginal() {

			// check password original field for existing text

			if (this.strPasswordOriginal != '') {
				this.validPasswordOriginal = true
				return true

			} else {
				this.validPasswordOriginal = false
				alert('Please enter a password')
				return false

			}

		},
		validatePasswordConfirmation() {
			
			// check password original field for existing text

			if (this.strPasswordConfirmation != '') {
				this.validPasswordConfirmation = true
				return true

			} else {
				this.validPasswordConfirmation = false
				alert('Please enter a password')
				return false

			}

		},
		validatePasswordsMatch() {
			
			// check that this.strPasswordOriginal == this.strPasswordConfirmation
			
			if (this.strPasswordOriginal == this.strPasswordConfirmation) {
				this.validPasswordOriginal == true
				this.validPasswordConfirmation == true
				return true

			} else {	
				this.validPasswordOriginal == false
				this.validPasswordConfirmation == false
				alert('Passwords must match')
				return false

			}

		}
	},
	mounted: function() {
		this.getAllUsers()
	}
}
</script>

<style>

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
		padding-left: 2vw;
		width: 80%;
	}

	input:focus {
		border-color: 2px solid blue;
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

	.main-label {
		font-size: 30px;;
		padding-top: 10vh;
		height: 50%;
	}

</style>

