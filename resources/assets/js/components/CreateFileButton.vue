<script>
import Modal from './Modal.vue';

export default {
    components: { Modal },

    data () {
        return {
            filename: null,
            modal: { open: true },
        };
    },

    methods: {
        create () {
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

    <modal :open.sync="modal.open" :submit="create" v-if="modal.open">
        <span slot="header">Create a new file</span>

        <input class="modal__input [ u-w:100p u-h:2.6r u-pl:.75r u-pr:.75r u-fz:1.125r u-ol:n ]" type="text" name="filename" v-model="filename">
    </modal>
</template>
