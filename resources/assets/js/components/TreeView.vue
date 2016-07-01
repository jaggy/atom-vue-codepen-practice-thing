<script>
export default {
    props: {
        project: {
            type: Object,
            default () {
                return {
                    name:  null,
                    files: [],
                };
            },
        },

        active: {
            type: Object,
            default () { return { id: null } }
        }
    },

    methods: {
        select (file) {
            this.$dispatch('file_select', file);
        },
    },
}
</script>

<template>
    <aside class="tree-view [ u-h:100p ]">
        <h2 class="tree-view__project-name [ u-fz:$sidebar-font-size u-lh:$sidebar-font-size u-pl:0.75r u-pr:0.75r u-h:2.5r u-d:fx u-ai:c ]">
            <i class="icon-all_inclusive [ u-mr:0.5r ]"></i>
            @{ project.name }
        </h2>
        <ul class="tree-view__files">
            <li class="[ u-d:b ]" v-for="file in project.files">
                <a href="#"
                   :class="{ 'u-bgc:$tree-view-active-file-background u-c:$tree-view-active-file-font-color': active.id == file.id }"
                   class="[ u-pl:1.5r u-pr:0.75r u-h:2r u-c:$sidebar-font-color u-td:n u-d:fx u-ai:c ]"
                   @click="select(file)">
                   <i class="file__icon [ u-mr:0.5r ]" :class="[ file.icon ]"></i>
                   @{ file.name }
               </a>
            </li>
        </ul>
    </aside>
</template>
