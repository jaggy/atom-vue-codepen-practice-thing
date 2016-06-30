import _ from 'underscore';
import TreeView from './components/TreeView.vue';
import Editor from './components/Editor.vue';
import Tabs from './components/Tabs.vue';

export default {
    components: {
        TreeView, Editor, Tabs,
    },

    ready () {
        this.$http.get('/api/projects/1/files')
            .then(({ data }) => {
                this.files = typeof data == 'string' ? JSON.parse(data) : data;
            });

        var channel = this.$pusher.subscribe('projects.1');

        channel.bind('App\\Events\\FileCreated', ({ file }) => {
            this.files.push(file);
        });
    },

    data: {
        current_file: {},
        tabs:  [],
        files: [],
    },

    events: {
        file_select (file) {
            if (! _.contains(this.tabs, file)) {
                this.tabs.push(file);
            }

            this.current_file = file;
        },

        file_close (file) {
            this.tabs = _.reject(this.tabs, { id: file.id });

            this.$dispatch('file_select', _.first(this.tabs));
        },
    },
};
