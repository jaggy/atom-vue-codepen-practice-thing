import ace from 'brace';
import Vue from 'vue';
import config from './config.js';

require('brace/mode/javascript');
require('brace/mode/php');
require('brace/mode/css');
require('brace/theme/tomorrow_night');

let VueAceEditor = {
    install () {
        Vue.prototype.ace = {
            install (selector) {
                let editor = ace.edit(selector);

                editor.setTheme('ace/theme/tomorrow_night');

                Vue.prototype.$ace = editor;
            },
        };
    }
};

Vue.use(require('vue-resource'));
Vue.use(require('vue-pusher'), {
    api_key: '6873a5e0c3b926f4500f',
    cluster: 'ap1',
});

Vue.use(VueAceEditor);

Vue.debug = true;
Vue.config.delimiters = ['@{', '}']

new Vue(config).$mount('body');
