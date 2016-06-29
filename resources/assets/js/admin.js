import Vue from 'vue';
import config from './config/admin.js';

Vue.debug = true;
Vue.config.delimiters = ['@{', '}']

new Vue(config).$mount('body');
