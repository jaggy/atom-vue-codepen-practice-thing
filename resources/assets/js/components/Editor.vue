<script>
export default {
    props: {
        file: {
            type: Object,
            default: function () {
                return {
                    name:      null,
                    extension: null,
                    content:   null,
                };
            }
        }
    },
}
</script>

<template lang="html">
<section class="editor">
    <div class="editor__content">
        <pre><code>@{ file.content }</code></pre>
    </div>
</section>
</template>
