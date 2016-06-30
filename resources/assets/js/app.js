import Vue from 'vue';
import config from './config.js';
import CodeMirror from 'codemirror';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/php/php');
require('codemirror/mode/css/css');
require('codemirror/addon/lint/lint');
require('codemirror/addon/lint/css-lint');
require('codemirror/addon/lint/javascript-lint');

let VueCodeMirror = {
    install (Vue, options) {
        Vue.prototype.editor = {
            install (element) {
                let editor = CodeMirror(element, {
                    lineNumbers: true,
                    gutters: ["CodeMirror-lint-markers"],
                    lint: true,
                    theme: 'base16-dark'
                });

                Vue.prototype.$editor = editor;
            }
        };
    }
};

Vue.use(require('vue-resource'));
Vue.use(require('vue-pusher'), {
    api_key: '6873a5e0c3b926f4500f',
    cluster: 'ap1',
});

Vue.use(VueCodeMirror);

Vue.debug = true;
Vue.config.delimiters = ['@{', '}']

new Vue(config).$mount('body');
