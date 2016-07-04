import _ from 'underscore';
import TreeView from './components/TreeView.vue';
import Editor from './components/Editor.vue';
import Tabs from './components/Tabs.vue';
import FuzzyFinder from './components/FuzzyFinder.vue';

export default {
    components: {
        TreeView, Editor, Tabs, FuzzyFinder,
    },

    ready () {
        this.fetch_project(1);
    },

    data: {
        current_file: {
            id:        null,
            name:      null,
            extension: null,
            content:   null,
        },
        active_project: {
            id:    null,
            name:  null,
            files: [],
        },
        tabs:  [],
        files: [],
        sidebar: { closed: false },
        search:  { open: false },
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
        fetch_project (project_id) {
            const supported_extensions = ['php', 'blade.php', 'css', 'html', 'js'];

            this.$http.get(`/api/projects/${project_id}`)
                .then(({ data }) => {
                    let project = typeof data == 'string' ? JSON.parse(data) : data;

                    for (var i = 0; i < project.files.length; i++) {
                        let file = project.files[i];

                        file.icon = 'octicon-' + file.extension.replace('.', '-');

                        if (! supported_extensions.includes(file.extension)) {
                            file.icon = 'icon-insert_drive_file';
                        }
                    }

                    this.active_project = project;
                });

            this.pusher.subscribe(`projects.${project_id}`, channel => {
                channel.bind('App\\Events\\FileCreated', ({ file }) => {
                    this.files.push(file);
                });
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
         * Reset the whole application state.
         *
         * @return {void}
         */
        reset () {
            this.search.open = false;
        },

        /**
         * Let's listen for the shortcuts here.
         *
         * @param  {Object} event
         * @return {void}
         */
        check_commands (event) {
            const KEY_S     = event.keyCode ==  83;
            const KEY_W     = event.keyCode ==  87;
            const KEY_E     = event.keyCode ==  69;
            const KEY_N     = event.keyCode ==  78;
            const KEY_P     = event.keyCode ==  80;
            const KEY_ESC   = event.keyCode == 27;
            const KEY_SUPER = (event.metaKey || event.ctrlKey);

            if (KEY_SUPER && KEY_S) {
                event.preventDefault();

                this.save_file();
            }

            if (KEY_SUPER && KEY_W) {
                event.preventDefault();

                this.$dispatch('file_close', this.current_file);
            }

            if (KEY_SUPER && KEY_E) {
                event.preventDefault();

                this.sidebar.closed = ! this.sidebar.closed;
            }

            if (KEY_SUPER && KEY_P) {
                event.preventDefault();

                this.search.open = ! this.search.open;
            }

            if (KEY_ESC) {
                event.preventDefault();

                this.reset();
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

            this.pusher.unsubscribe(`files.${this.current_file.id}`);
            this.pusher.subscribe(`files.${file.id}`, channel => {
                channel.bind('App\\Events\\FileSaved', ({ file }) => {
                    this.$editor.doc.setValue(file.content);
                });
            });

            this.$http.get(`/api/files/${file.id}`)
                .then(({ data }) => {
                    let file = typeof data == 'string' ? JSON.parse(data) : data;

                    this.current_file = file;

                    this.$editor.doc.setValue(file.content || '');
                    this.$editor.setOption('mode', file.language);
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
