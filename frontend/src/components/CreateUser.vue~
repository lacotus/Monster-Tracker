<template>

	<!-- Two container divs. First is window size, second contains logic -->
	<div class="main centered-content" style="overflow: hidden;">
		<div class="container">

			<!-- Widgets that control logic -->
			<label class="main-label">Please provide the following information to create your account</label>
			<label>Username</label>
			<input ref="inpUsername" v-model="username">
			<label>Password</label>
			<input ref="inpPasswordOriginal" v-model="strPasswordOriginal" type="password">
			<label>Confirm Password</label>
			<input ref="inpPasswordConfirmation" v-model="strPasswordConfirmation" type="password">
			<button v-on:click="createUser()">Create</button>
			<button>Cancel</button>
			
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
			username: '',
			strPasswordOriginal: '',
			strPasswordConfirmation: ''
		}
	},
	methods: {
		checkPasswordsMatch() {
			
			// if passwords match return true, else return false
			if (this.strPasswordOriginal == this.strPasswordConfirmation) {
				return true
			} else {
				this.$refs.inpUsername.style.border = "2px solid red";
				return false
			}

		},
		checkTakenUsername() {
			
			// for loop checks each taken username against those which already exist in the database, 
			// if none are found the loop ends and false is returned
			for (let i = 0; i < this.numberOfUsers; i++) {
				if (this.users[i].strUsername == this.username) {
					return true
				}
			}
			return false

		},
		createUser() {

			// 
			if (this.validation()) {
				
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

		// validation functions
		validation() {
			
			console.log('validate ran')

			// Run all three validation functions
			if (this.validateUsername()) {
				if (this.validatePasswordOriginal()) {
					if (this.validatePasswordConfirmation()) {
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
	
		},
		validateUsername() {
			
			// check username field for existing text
			if (this.username != '') {
				return true
			} else {
				this.$refs.inpUsername.style.border = "2px solid red"
				return false
			}

		},
		validatePasswordOriginal() {

		},
		validatePasswordConfirmation() {

		}
	},
	mounted: function() {
		this.getAllUsers()
	}
}
</script>

<style>
	
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

