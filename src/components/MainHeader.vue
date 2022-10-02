<template>
	
	<div id="container" class="MainStyle" ref="headerContainer">
		<div id="title" class="TitleStyle">Monster Tracker</div>
		<div id="closeButton"><button class="ButtonStyle" v-on:click="writeWindowWidth()">close</button></div>
		<div id="addButton"><button class="ButtonStyle">add</button></div>
	</div>

</template>

<!-- Commenting some code for testing reasons -->

<script>
export default {
	name: 'MainHeader',
	props: {
		title: String
	},
	methods: {
		writeWindowWidth(){
			console.log(window.innerWidth);
			console.log(window.innerHeight);
		}
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
