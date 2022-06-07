<template>
  <div id="bodyTab">
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          text: 'Home',
          to: { name: 'Home' }
        },
        {
          text: 'Manage',
          href: '#'
        },
        {
          text: 'Library',
          active: true
        }
      ]
    }
  }
}
</script>
