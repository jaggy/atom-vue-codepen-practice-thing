<script>
import _ from 'underscore';
import { focusAuto } from 'vue-focus';

export default {
    directives: {
        focusAuto: focusAuto
    },

    props: {
        files: {
            type: Array,
            default () {
                return [];
            }
        },

        visible: {
            type:    Boolean,
            twoWay:  true,
            default: false
        }
    },

    data () {
        return {
            query:  null,
            cursor: -1,
            active: { id: null },
        }
    },

    methods: {
        highlight (file) {
            this.cursor = _.indexOf(this.files, file);
            this.active = file;
        },

        up () {
            if (this.cursor <= 0) {
                return;
            }

            this.highlight(this.files[this.cursor - 1]);
        },

        down () {
            if (this.cursor >= (this.files.length - 1)) {
                return;
            }

            this.highlight(this.files[this.cursor + 1]);
        },

        select (file) {
            this.$dispatch('file_select', file);

            this.visible = false;
        },
    }
}
</script>

<template>
<section class="fuzzy-finder-container [ u-p:a u-l:50p u-zi:500 u-fz:0.8125r ]" v-show="visible">
    <section
        :class="{ 'fuzzy-finder--active': visible }"
        class="fuzzy-finder [ u-w:29.25r a-bxsh:l u-p:r u-l:-50p u-bgc:$editor-background u-d:fx u-fxd:c ]">
        <div class="fuzzy-finder__wrapper [ u-pl:1r u-pr:1r u-pb:1r u-p:r u-d:fx u-fxd:c ]">
            <input class="fuzzy-finder__input [ u-pt:0.75r u-pb:0.75r u:m0a u-d:b a-ff:code u-w:100p u-b:n u-ol:n u-p:r ]"
                   type="text"
                   name="search"
                   v-model="query"
                   v-el:query
                   autofocus="autofocus"
                   @keydown.down="down"
                   @keydown.up="up"
                   @keydown.enter="select(active)"
                   v-focus-auto>

            <div class="fuzzy-finder__highlight [ u-h:2 u-w:0p ]"></div>
        </div>

        <ul class="fuzzy-finder__files [ u-lis:n ]">
            <li v-for="file in files | filterBy query in 'name'">
                <a href="#"
                   :class="{ 'fuzzy-finder__file--active': active.id == file.id }"
                   class="fuzzy-finder__file [ u-d:b u-p:1r u-c:$font-color u-td:n ]"
                   @mouseover="highlight(file)"
                   @click="select(file)">
                   <i :class="[ file.icon ]" class="[ u-mr:0.5r ]"></i>
                    @{ file.name }
                </a>
            </li>
        </ul>
    </section>
</section>
</template>
