<template>

	<div class="container bordered">

		<label>{{ battleName }}</label>
		<label style="font-size: 12px;">{{ description }}</label>

	</div>

</template>

<script>
export default {
	name: 'BattleItem',
	data() {
		return {
			//battleName: '',
			//description: ''
		}
	},
	mounted: function() {
		console.log("battleName: ", this.battleName, "\ndescription: ", this.description);
	},
	props: ['battleName', 'description']
}
</script>

<style>

	.bordered {
		border: 2px solid black;
		border-radius: 5px;
	}

	.container {
		align-items: left;
		display: flex;
		flex-direction: column;
		justify-content: left;
		overflow-y: scroll;
		padding-left: 10%;
		padding-right: 10%;
		/* Hide scrollbar */
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.container::-webkit-scrollbar {
		display: none;
	}

</style>
