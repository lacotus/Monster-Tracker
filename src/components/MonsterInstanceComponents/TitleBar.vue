<template>

	<div id="divTopBar" class="claRow" ref="divTopBar" style="height: 25%">
	
		<!-- Name input -->
		<div id="claRow" class="centeredContent claName">
			<input id="inpName" class="claInput" placeholder="Name..." type="text">
		</div>
     
		<!-- Settings button -->
		<a ref="cogContainer" @click="testMethod" class="centeredContent" >
			<img src="@/assets/cog.png" ref="cogImg" />
		</a>

		<!-- Check input -->
		<div id="divCheckbox" class="centeredContent" style="width: 13.3%; height: 100%;">
			<input id="chkCheckbox" type="checkbox" style="width: 15px; height: 15px;">
		</div>
	
	</div>

</template>

<script>

export default {
	name: 'title-bar',
	methods: {
		testMethod: function() {
			console.log('testMethod was a success');
		}
	},
	mounted: function () {
		let height = this.$refs.divTopBar.clientHeight - 20;
	
		this.$refs.cogContainer.width = height;
		this.$refs.cogContainer.height = height;	
		this.$refs.cogImg.width = height;
		this.$refs.cogImg.height = height;

		console.log({ height });
	},
	data() {
		return {
			total_height: 0
		}
	}
}

</script>

<style>

	.bordered {
		border: 1px solid black;
	}

	.claBtnSettings {
		background-image: url('@/assets/cog.png');
	}

   .claInput {
        border-color: green;
        border-style: solid;
        border-width: 0px 2px 2px 0px;
        font-family: "Cutive";
        font-size: 30px;
        outline: none;
        padding-left: 20px;
        width: 95%;
	}


	.claSettings {
		background-color: white;
		border-radius: 100%;
		margin-left: 12.5px;
		margin-top: 12.5px;
		width: 9.975%;
		height: 75%;
	}

	.centeredContent {
		align-items: center;
		display: flex;
		justify-content: center;
	}

	.claName {
		padding-left: 20px;
		width: 73.3%;
		height: 100%;
	}

	.claRow {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	.cogImg {
		background-image: url('@/assets/cog.png');
	}
	
	::placeholder {
		color: gray;
		opacity: 1;
	}
	.testBackground {
		background-color: yellow;
	}
	
	.testBackground2 {
		background-color: green;
	}
	
</style>

