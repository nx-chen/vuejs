<template>
  <div>
    <b>tab is on your right side :)</b>
    <b-tabs card end vertical align content-class="mt-3">
      <b-tab class="tab_item" title="First" active><p>I'm the first tab</p></b-tab>
      <b-tab class="tab_item" title="Second"><p>I'm the second tab</p></b-tab>
      <b-tab class="tab_item" title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style lang="less">
.nav-link {
  border-radius: 0.25rem;
}
</style>
