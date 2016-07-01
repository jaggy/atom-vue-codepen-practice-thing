<script>
export default {
    props: {
        files: {
            type: Array,
            default () {
                return [];
            }
        },

        active: {
            type: Object,
            default () {
                return { id: null };
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
<section class="tab-bar [ u-h:2.5r u-bgc:$tab-bar-background ]">
    <ul class="[ u-lis:n u-d:fx u-h:100p ]">
        <li class="tab-bar__tab tab [ u-d:fx u-ai:c u-jc:c u-p:r u-fz:0.8125r u-p:r ]"
            v-for="file in files">
            <a href="#"
               class="tab__item [ u-d:b u-w:12r u-pl:0.75r u-pr:0.75r u-c:$tab-bar-font-color u-td:n ]"
               @click.prevent="select(file)">
               @{ file.name }.@{ file.extension }
           </a>

           <a href="#"
              class="tab__close [ u-c:$tab-bar-font-color u-td:n ]"
              @click.prevent="close(file)">
              &times;
           </a>

           <div v-if="file.id == active.id" class="tab__highlight [ u-p:a u-h:2 u-w:100p u-b:0 u-l:0 u-bgc:$sidebar-header-font-color ]"></div>
        </li>
    </ul>
</section>
</template>
