<template>
  <div>

    <b-button size="lg" v-b-modal.modal>Launch demo modal</b-button>

    <b-modal id="modal" title="ModalBody" centered hide-header hide-footer>
      <p class="my-4">Hello from modal!</p>
    </b-modal>

  </div>
</template>

<script>
export default {
  name: 'ModalComponent'
}
</script>

<style lang="less">

</style>
