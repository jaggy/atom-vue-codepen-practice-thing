<script>
import CreateFileButton from './CreateFileButton.vue';

export default {
    props: {
        files: {
            type: Array,
            default () {
                return [];
            },
        },
    },

    components: { CreateFileButton },

    methods: {
        select (file) {
            this.$dispatch('file_select', file);
        },
    },
}
</script>

<template>
    <aside class="tree-view">
        <header class="tree-view__commands commands">
            <create-file-button></create-file-button>
        </header>

        <section class="tree-view__body">
            <ul>
                <li v-for="file in files">
                    <a href="#" @click="select(file)">@{ file.name }.@{ file.extension }</a>
                </li>
            </ul>
        </section>
    </aside>
</template>
