<template>
  <div>
    <div id="panel_dropsown_vertical">
      <b-dropdown id="dropdown_up" dropup text="Dropup Variant Button" class="m-md-2"  variant="success">
        <b-dropdown-item>Normal action</b-dropdown-item>
        <b-dropdown-item active>Active action</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdown_down" text="Dropdown Variant Button" class="m-md-2" variant="primary">
        <b-dropdown-item>Normal action</b-dropdown-item>
        <b-dropdown-item active>Active action</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>

    </div>
    <div id="panel_dropsown_horizontal">
      <b-dropdown id="dropdown_right" text="Dropright Variant Button" class="m-md-2" dropright variant="outline-danger">
        <b-dropdown-item>Normal action</b-dropdown-item>
        <b-dropdown-item active>Active action</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>

      <b-dropdown id="dropdown_left" text="Dropleft Variant Button" class="m-md-2" dropleft variant="info">
        <b-dropdown-item>Normal action</b-dropdown-item>
        <b-dropdown-item active>Active action</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>
    </div>
    <b-dropdown split split-variant="outline-dark" variant="dark" text="Split Variant Dropdown" class="m-2">
      <b-dropdown-item>Normal action</b-dropdown-item>
      <b-dropdown-item active>Active action</b-dropdown-item>
      <b-dropdown-item disabled>Disabled action</b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: 'DropdownComponent'
}
</script>

<style lang="less">
#panel_dropsown_vertical {
  padding: 100px 0px 100px 0px;
  display: inline-grid;
}

#panel_dropsown_horizontal {
  padding: 0px 150px 0px 150px;
  display: inline-grid;
}
</style>
