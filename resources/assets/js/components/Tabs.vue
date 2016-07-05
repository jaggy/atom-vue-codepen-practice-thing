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
<section class="tab-bar [ u-h:2.5r u-bgc:$tab-bar-background u-p:f u-t:0 u-zi:400 u-w:100p ]">
    <ul class="[ u-lis:n u-d:fx u-h:100p ]">
        <li
            :class="{ 'tab--active': file.id == active.id }"
            class="tab-bar__tab tab [ u-d:fx u-p:r u-fz:0.8125r u-p:r ]"
            v-for="file in files">
            <a href="#"
               class="tab__item [ u-d:b u-w:12r u-pl:0.75r u-pr:0.75r u-c:$tab-bar-font-color u-td:n u-h:100p u-d:fx u-ai:c ]"
               @click.prevent="select(file)">
               @{ file.basename }
            </a>

           <a href="#"
              class="tab__close [ u-c:$tab-bar-font-color u-td:n u-p:a u-r:1r u-t:9 u-f:b ]"
              @click.prevent="close(file)">
              &times;
           </a>

           <div :class="{ 'tab__highlight--active': file.id == active.id }"
                class="tab__highlight [ u-p:a u-h:2 u-b:0 u-l:0 u-bgc:$sidebar-header-font-color ]"></div>
        </li>
    </ul>
</section>
</template>
