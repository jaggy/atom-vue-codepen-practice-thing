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

        /**
         * Fetch all the files from the given project id.
         *
         * @param  {Number} project_id
         * @return {void}
         */
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

        /**
         * Save the file.
         *
         * @return {void}
         */
        save_file() {
            let content = this.$editor.getValue();

            this.$http.patch(`/api/files/${this.current_file.id}`, { content: content });
        },

        /**
         * Let's listen for the shortcuts here.
         *
         * @param  {Object} event
         * @return {void}
         */
        check_commands (event) {
            if ((event.metaKey || event.ctrlKey) && event.keyCode == 83) {
                event.preventDefault();

                this.save_file();
            }
        },
    },

    events: {
        /**
         * Select the file and update the editor values.
         *
         * @param  {Object} file
         * @return {void}
         */
        file_select (file) {
            if (! _.contains(this.tabs, file)) {
                this.tabs.push(file);
            }

            this.current_file = file;

            this.$editor.doc.setValue(file.content);
            this.$editor.setOption('mode', file.language);

            var channel = this.$pusher.subscribe(`files.${file.id}`);

            channel.bind('App\\Events\\FileSaved', ({ file }) => {
                this.current_file = file;

                this.$editor.doc.setValue(file.content);
            });
        },

        /**
         * Remove the file from the tab bar and open the next file in the queue
         *
         * @param  {Object} file
         * @return {void}
         */
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
