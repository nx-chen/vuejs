<template>
  <div id="bodyTab">
    <h2>LE MEILLEUR GROUPE</h2>
    <b-table striped hover :items="items" small :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {
          key: 'age',
          label: 'Age',
          sortable: true,
          variant: 'success'
        },
        {
          key: 'first_name',
          sortable: true
        },
        {
          key: 'last_name',
          sortable: false
        }
      ],
      items: [
        { age: 21, first_name: 'Philippe', last_name: 'Hernandez-alarcia' },
        { age: 21, first_name: 'Stevie', last_name: 'Lavenu' },
        { age: 21, first_name: 'Capucine', last_name: 'Fortin' },
        { age: 24, first_name: 'Ningxi', last_name: 'Chen' }
      ]
    }
  }
}
</script>

<style lang="less">
h2 {
  color: #7c795d;
  font-family: 'Trocchi', serif;
  font-size: 35px;
  font-weight: normal;
  line-height: 48px;
  margin: 0px 0px 20px 0px;
}
</style>
