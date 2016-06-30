import _ from 'underscore';
import TreeView from './components/TreeView.vue';
import Editor from './components/Editor.vue';
import Tabs from './components/Tabs.vue';

export default {
    components: {
        TreeView, Editor, Tabs,
    },

    ready () {
        this.fetch_project_files(1);
    },

    data: {
        current_file: {},
        tabs:  [],
        files: [],
    },

    methods: {
        clean_editor () {
            this.current_file = {
                id:        null,
                name:      null,
                extension: null,
                content:   null,
            };

            this.$editor.doc.setValue('');
        },

        fetch_project_files (project_id) {
            this.$http.get(`/api/projects/${project_id}/files`)
                .then(({ data }) => {
                    this.files = typeof data == 'string' ? JSON.parse(data) : data;
                });

            var channel = this.$pusher.subscribe(`projects.${project_id}`);

            channel.bind('App\\Events\\FileCreated', ({ file }) => {
                this.files.push(file);
            });
        },
    },

    events: {
        file_select (file) {
            if (! _.contains(this.tabs, file)) {
                this.tabs.push(file);
            }

            this.$editor.doc.setValue(file.content);
            this.$editor.setOption('mode', file.language);
        },

        file_close (file) {
            this.tabs = _.reject(this.tabs, { id: file.id });

            if (this.tabs.length == 0) {
                this.clean_editor();

                return;
            }

            this.$dispatch('file_select', _.first(this.tabs));
        },
    },
};
