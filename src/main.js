import Vue, { VueInit } from './app';
import axios from 'axios';

Vue.prototype.$http = axios;

window.$app = VueInit(require('./App.vue').default, '#app');
