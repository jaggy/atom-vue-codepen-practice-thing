<script>
export default {
    props: {
        files: {
            type: Array,
            default () {
                return [];
            }
        }
    },

    data () {
        return { query: null }
    }
}
</script>

<template>
<section class="fuzzy-finder-container [ u-p:a u-l:50p u-zi:500 ]">
    <section class="fuzzy-finder [ u-w:29.25r a-bxsh:l u-p:r u-l:-50p u-bgc:$editor-background u-d:fx u-pl:1r u-pr:1r u-pb:1r u-fxd:c ]">
        <input class="fuzzy-finder__input [ u-pt:0.75r u-pb:0.75r u:m0a u-d:b a-ff:code u-w:100p u-b:n u-ol:n ]" type="text" name="search" v-model="query">

        <ul class="fuzzy-finder__files">
            <li v-for="file in files | filterBy query in 'name'">
                <a href="">@{ file.name }</a>
            </li>
        </ul>
    </section>
</section>
</template>
