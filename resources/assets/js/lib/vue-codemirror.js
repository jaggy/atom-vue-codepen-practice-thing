import CodeMirror from 'codemirror';

module.exports = {
    install: function (Vue, options) {
        Vue.prototype.editor = {
            install (element) {
                Vue.prototype.$editor = CodeMirror(element, options);
            }
        }
    }
};
