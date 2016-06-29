import TreeView from './components/TreeView.vue';
import Editor from './components/Editor.vue';

export default {
    components: {
        TreeView, Editor
    },

    ready () {
        this.$http.get('/api/projects/1/files')
            .then(({ data }) => this.files = data);

        var channel = this.$pusher.subscribe('projects.1');

        channel.bind('App\\Events\\FileCreated', ({ file }) => {
            this.files.push(file);
        });
    },

    data: { files: [] },

    events: {
    },
};
