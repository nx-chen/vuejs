<template>
  <div id="bodyTab">
    <ModalComponent />
  </div>
</template>

<script>

import ModalComponent from '@/components/ModalComponent.vue'

export default {
  name: 'ModalView',
  components: {
    ModalComponent
  }
}
</script>

<style lang="less">
#bodyTab {
  padding: 20px 150px 20px 150px;
}
</style>
