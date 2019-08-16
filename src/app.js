import Vue from 'vue';
import { typeIs } from './helpers';
import * as components from './global';

Object.entries(components).forEach((args) => Vue.component(...args));

export function VueInit(render, selector, options) {
	if (!document.querySelector(selector)) {
		return null;
	}

	const setup = {
		render: (h) => h(render),
	};

	if (options) {
		Object.assign(
			setup,
			(() => {
				if (typeIs(options, 'object')) {
					return options;
				}

				if (typeIs(options, 'function')) {
					return options(Vue) || {};
				}

				return {};
			})()
		);
	}

	return new Vue(setup).$mount(selector);
}

export default Vue;