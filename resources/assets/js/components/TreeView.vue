<script>
import CreateFileButton from './CreateFileButton.vue';

export default {
    props: {
        files: [],
    },
    components: { CreateFileButton },
}
</script>

<template>
    <aside class="tree-view">
        <header class="tree-view__commands commands">
            <create-file-button></create-file-button>
        </header>

        <section class="tree-view__body">
            <ul>
                <li v-for="file in files">@{ file.name }.@{ file.extension }</li>
            </ul>
        </section>
    </aside>
</template>
