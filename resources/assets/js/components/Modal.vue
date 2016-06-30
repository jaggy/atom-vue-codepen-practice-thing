<script>
export default {
    props: {
        submit: null,
        open: {
            default: false,
            twoWay:  true,
            type:    Boolean,
        }
    },
}
</script>

<template>
<section class="modal-container [ u-h:100p u-w:100p u-p:a u-t:0 u-p:l u-d:fx u-ai:c u-jc:c u-zi:100 ]">
    <div class="modal [ u-mw:30r u-w:90p u-p:2r u-bdrs:5 ]">
        <form action="#" @submit.prevent="submit">
            <header class="modal__header">
                <h1 class="modal__title [ u-fz:1.875r u-fw:b ]"><slot name="header"></slot></h1>
            </header>

            <section class="modal__body">
                <slot></slot>
            </section>

            <footer class="modal__footer [ u-pt:1r u-ta:c ]">
                <button class="button button--neutral" type="button" @click.prevent="open = false">Cancel</button>
                <button class="button button--primary" type="submit">Submit</button>
            </footer>
        </form>
    </div>
</section>
</template>
