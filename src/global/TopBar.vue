<template>
	<div class="top-bar">
		<div class="logo-wrapper">
			<img class="logo-icon" src="./../assets/instagram-logo.svg" alt="">
			<div class="separator"></div>
			<span class="logo-name">Instagram</span>
		</div>
		<div class="search-wrapper">
			<search-input></search-input>
		</div>
		<div class="actions-wrapper">
			<img
				:src="navIcons.compassicon"
				alt="compass"
				class="action"
			>
			<img
				:src="navIcons.hearticon"
				alt="heart"
				class="action"
			>
			<img
				:src="navIcons.personicon"
				alt="person"
				class="action"
			>
		</div>
	</div>
</template>

<script>
import compassicon from '../assets/compass.svg';
import hearticon from '../assets/like.svg';
import personicon from '../assets/user.svg';

export default {
	name: 'TopBar',

	data() {
		return {
			navIcons: {
				compassicon,
				hearticon,
				personicon,
			},
		};
	},
};
</script>

<style lang="scss" scoped>
	.top-bar {
		display: flex;
		justify-content: space-between;
		padding: 24px 0;
	}

	.logo {

		&-wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.separator {
				width: 1px;
				height: 100%;
				background: #000;
				margin: 0 20px;
			}
		}

		&-icon {
			width: 24px;
		}

		&-name {
			font-family: 'Lobster', cursive;
			font-size: 26px;
		}
	}

	.actions-wrapper {
		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: 140px;

		.action {
			width: 26px;
			height: 26px;
		}
	}
</style>