import Vue from 'vue';
import config from './config.js';

Vue.use(require('vue-resource'));

Vue.debug = true;
Vue.config.delimiters = ['@{', '}']

new Vue(config).$mount('body');
