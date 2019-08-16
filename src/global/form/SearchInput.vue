<template>
	<div class="search-wrapper">
		<label @click="focusInput" :class="{focused: isFocused}">
			<img
				v-if="icons.placeholderIcon"
				:src="icons.placeholderIcon"
				alt="placeholder"
				class="icon icon--placeholder"
			>
			<span v-if="!isFocused">{{ placeholder }}</span>
		</label>
		<img
			v-if="icons.clearableIcon && isFocused"
			:src="icons.clearableIcon"
			alt="clearable"
			class="icon icon--clearable"
			@click.prevent="clearInput"
		>
		<input
			ref="searchField"
			v-model="search"
			type="text"
			@blur="isFocused = !isFocused"
			@focus="isFocused = !isFocused"
			:placeholder="placeholder"
		>
	</div>
</template>

<script>
import placeholderIcon from '../../assets/magnifying-glass.svg';
import clearableIcon from '../../assets/error.svg';

export default {
	name: 'SearchInput',

	data() {
		return {
			search: '',
			isFocused: false,
		};
	},

	props: {
		icons: {
			type: Object,
			default: () => ({
				placeholderIcon,
				clearableIcon,
			}),
		},

		placeholder: {
			type: String,
			default: 'Search',
		},
	},

	methods: {
		focusInput() {
			this.$refs.searchField.focus();
		},

		clearInput() {
			alert()
		}
	},

	computed: {

	},
};
</script>

<style lang="scss" scoped>
	.search-wrapper {
		position: relative;

		.icon {
			width: 10px;
			height: 10px;

			&--clearable {
				position: absolute;
				right: 6px;
				top: calc(50% - 8px);
				width: 16px;
				height: 16px;
			}
		}
	}

	label {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #999;
		background: #fafafa;
		border: solid 1px #dbdbdb;
		cursor: text;

		&.focused {
			width: auto;
			background: none;
			position: relative;
			border: none;

			.icon {
				position: absolute;
				left: 10px;
				top: 8px;
			}
		}

		img {
			margin-right: 8px;
		}
	}

	input {
		border: solid 1px #dbdbdb;
		border-radius: 3px;
		color: #262626;
		outline: 0;
		padding: 4px 20px 4px 26px;
		z-index: 2;
		font-size: 16px;
	}
</style>