<template>
  <div id="bodyTab">
    <div id="div_refresh_btn">
      <b-button id="RefreshProgress" class="mt-3" @click="randomValue">
        Refresh
      </b-button>
    </div>
    <p class="progress_titre">
      With <span class="name_property">show-progress</span> Propertie :
    </p>
    <b-progress class="mt-2" :value="value" :max="max" show-progress variant="success"></b-progress>

    <p class="progress_titre">
      With <span class="name_property">striped</span> Propertie :
    </p>
    <b-progress class="mt-2" :value="value" :max="max" striped variant="warning"></b-progress>

    <p class="progress_titre">
      With <span class="name_property">animated</span> Propertie :
    </p>
    <b-progress class="mt-2" :value="value" :max="max" animated></b-progress>

  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 45,
      max: 100
    }
  },
  methods: {
    randomValue () {
      this.value = Math.random() * this.max
    }
  }
}
</script>

<style lang="less">
.progress {
  height: 30px !important;
}

.progress_titre {
  color: black;
  font-family: system-ui;
  font-size: 20px;
  font-weight: 500;
  line-height: 36px;
  margin: 0;
  display: table-cell;
}

.name_property {
  font-style: italic;
  color: rgb(160, 57, 57);
}

#div_refresh_btn {
  display: flex;
}

#RefreshProgress {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  background-color: whitesmoke;
  margin-bottom: 30px;
}

#RefreshProgress:active {
  box-shadow: 0px 0px 0px 0px;
  top: 5px;
  left: 5px;
}

@media (min-width: 768px) {
  #RefreshProgress {
    padding: 0.25em 0.75em;
  }
}
</style>
