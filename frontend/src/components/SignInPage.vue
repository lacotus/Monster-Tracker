<template>
	
	<!-- Two container divs. First is window width, second contains logic -->
	<div class="main centered-content" style="overflow: hidden;">
		<div class="container">
			
			<!-- Widgets that control logic -->
			<label class="welcome-label">Welcome to Monster Tracker!</label>
			<label style="text-align: left; font-size: 1vw; margin-left: 3vw; width: 90%;">Please sign in:</label>
			<label style="margin-top: 3vh;">Username:</label>
			<input>
			<label style="margin-top: 3vh;">Password:</label>
			<input type="password">
			<a href="https://www.google.com" style="margin-top: 10px;">Create account</a>
		</div>
	</div>

</template>

<script>
export default {
	name: 'SignInPage',
	methods: {
		getWindowDemensions() {
			var width = window.innerWidth;
			var height = window.innerHeight;
			
			console.log('Width and height: ', width, height)
		}
	},
	mounted: function() {
		this.getWindowDemensions()
	}
}
</script>

<style>

	/* Element specific CSS */
	a:link {
		color: black;
	}

	a:active {
		color: blue;
	}

	a:visited {
		color: blue;
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

