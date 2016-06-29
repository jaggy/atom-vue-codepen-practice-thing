<script>
import CreateFileButton from './CreateFileButton.vue';

export default {
    components: { CreateFileButton },
}
</script>

<template>
    <aside class="tree-view">
        <header class="tree-view__commands commands">
            <create-file-button></create-file-button>
        </header>
    </aside>
</template>
