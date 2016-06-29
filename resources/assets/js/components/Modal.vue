<script>
export default {
    props: ['submit'],
}
</script>

<template>
<section class="modal-container [ u-h:100p u-w:100p u-p:a u-t:0 u-p:l u-d:fx u-ai:c u-jc:c ]">
    <div class="modal [  ]">
        <header class="modal__header">
            <h1 class="modal__title"><slot name="header"></slot></h1>
        </header>

        <section class="modal__body">
            <slot></slot>
        </section>

        <footer class="modal__footer">
            <button @click.prevent="submit">Submit</button>
        </footer>
    </div>
</section>
</template>
