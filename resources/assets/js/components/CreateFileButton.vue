<script>
import Modal from './Modal.vue';

export default {
    components: { Modal },

    data () {
        return {
            filename: null,
            modal: { open: false },
        };
    },

    methods: {
        create_file () {
            this.$http
                .post('/api/projects/1/files', { filename: this.filename })
                .then(file => {
                    this.filename = null;
                });

            this.modal.open = false;
        }
    },
}
</script>

<template>
    <button @click.prevent="modal.open = true">+</button>

    <modal :submit="create_file" v-if="modal.open">
        <span slot="header">Create a new file</span>

        <input type="text" name="filename" v-model="filename">
    </modal>
</template>
