import Vue from 'vue';
import config from './config.js';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/php/php');
require('codemirror/mode/css/css');
require('codemirror/addon/lint/lint');
require('codemirror/addon/lint/css-lint');
require('codemirror/addon/lint/javascript-lint');

Vue.use(require('vue-resource'));
Vue.use(require('./lib/vue-codemirror.js'), {
    lineNumbers: true,
    gutters: ["CodeMirror-lint-markers"],
    theme: 'base16-dark',
    lint: true
});
Vue.use(require('vue-pusher'), {
    api_key: '6873a5e0c3b926f4500f',
    options: {
        cluster:  'ap1',
        encrypted: true,
    }
});


Vue.debug = true;
Vue.config.delimiters = ['@{', '}']

new Vue(config).$mount('body');
