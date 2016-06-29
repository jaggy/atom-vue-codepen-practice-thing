import Vue from 'vue';
import config from './config.js';

Vue.use(require('vue-resource'));
Vue.use(require('vue-pusher'), {
    api_key: '6873a5e0c3b926f4500f',
    cluster: 'ap1',
});

Vue.debug = true;
Vue.config.delimiters = ['@{', '}']

new Vue(config).$mount('body');
