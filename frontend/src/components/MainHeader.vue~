
<!-- 1-25-23: Example of how to use service to call expressjs -->

<template>
	
	<div id="container" class="MainStyle" ref="headerContainer">
		<div id="title" class="TitleStyle">Monster Tracker</div>
		<div id="closeButton"><button class="ButtonStyle" v-on:click="getAllUsers()">close</button></div>
		<div id="addButton"><button class="ButtonStyle">add</button></div>
	</div>

</template>

<!-- Commenting some code for testing reasons -->

<script>
import { getAllUsers, createUser } from '@/services/UserServices'

export default {
	name: 'MainHeader',
	data() {
		return {
			users: [],
			numberOfUsers: 0
		}
	},
	props: {
		title: String
	},
	methods: {
		getAllUsers() {
			getAllUsers().then(response => {
				console.log(response)
				this.users = response
				this.numberOfUsers = this.users.length
				console.log('Users: ', this.users)
				console.log('Number of users: ', this.numberOfUsers)
			})
		},
		writeWindowWidth(){
			console.log(window.innerWidth);
			console.log(window.innerHeight);

			console.log("MainHeader width: " + document.getElementById("container").offsetWidth);
			console.log("MainHeader height: " + document.getElementById("container").offsetHeight);
		}
	},
	mounted () {
		this.getAllUsers();
	}
}
</script>

<style>
	.description {
		font-family: "Cutive";
	}

	/* Display in a line */
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

    .MainStyle {
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
