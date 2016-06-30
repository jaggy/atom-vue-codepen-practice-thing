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

    methods: {
        select (file) {
            this.$dispatch('file_select', file);
        },

        close (file) {
            this.$dispatch('file_close', file);
        },
    }
}
</script>

<template>
<section class="tab-bar [ u-h:2r ]">
    <ul class="tabs [ u-lis:n ]">
        <li class="tab [ u-d:ib ]" v-for="file in files">
            <a href="#"
               class="[ u-p:1r ]"
               @click.prevent="select(file)">
               @{ file.name }.@{ file.extension }
           </a>

           <a href="#"
              @click.prevent="close(file)">
              &times;
           </a>
        </li>
    </ul>
</section>
</template>
