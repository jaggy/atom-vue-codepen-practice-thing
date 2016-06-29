<script>
import Modal from './Modal.vue';

export default {
    components: { Modal },

    data () {
        return {
            modal: { open: false },
        };
    },

    methods: {
        create_file () {
            // Access the api here.

            this.$http
                .post('/api/projects/1/files')
                .then(function (data) {
                    console.error(data);
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

        sadfasdfkasjfsa
    </modal>
</template>
