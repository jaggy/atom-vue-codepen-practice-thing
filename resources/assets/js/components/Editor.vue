<script>
export default {
    ready () {
        this.editor.install(this.$els.editor);
    },
}
</script>

<template lang="html">
    <section v-el:editor class="editor [ u-h:100p ]">
    </section>
</template>
