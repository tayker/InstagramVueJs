<template>
	<div class="container" :style="{ maxWidth: maxWidth + 'px', padding: calculatedPadding }">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'AppContainer',

	props: {
		maxWidth: {
			type: Number,
			default: 920,
		},

		padding: {
			type: Array,
			default:() => ([0, 20, 0, 20]),
		},
	},

	computed: {
		calculatedPadding() {
			return this.padding.map(item => {
				return item + 'px';
			}).join(' ');
		},
	},
};
</script>

<style lang="scss" scoped>
	.container {
		margin: auto;
	}
</style>