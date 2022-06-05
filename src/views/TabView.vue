<template>
  <div id="bodyTab">
    <TabComponent />
  </div>
</template>

<script>

import TabComponent from '@/components/TabComponent.vue'

export default {
  name: 'TabView',
  components: {
    TabComponent
  }
}
</script>

<style lang="less">
#bodyTab {
  padding: 20px 150px 20px 150px;
}
</style>
