<template>
	<div class="main-section">
		<app-container
			:maxWidth="1010"
		>
			<top-bar></top-bar>
		</app-container>
	</div>
</template>

<script>
export default {
	name: 'App',
}
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css?family=Lexend+Deca|Lobster&display=swap');
	@import 'normalize-scss';
	@include normalize();

	* {
		box-sizing: border-box;
	}

	body {
		font-family: 'Lexend Deca', sans-serif;
	}

	.main-section {
		border-bottom: 1px solid rgba(0,0,0,.0975);
	}
</style>