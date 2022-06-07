<template>
  <div id="app">
    <b-navbar id="main_navbar" type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item>
          <router-link to="/">Home</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/Tab">Tab</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/Modal">Modal</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/Dropdown">Dropdown</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/Table">Table</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/Progress">Progress</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/Breadcrumb">Breadcrumb</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/Navbar">Navbar</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/Skeleton">Skeleton</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <div id="MainBody">
      <router-view />
    </div>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #687077;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #a9d9f0;

    &.router-link-exact-active {
      color: #0d3957;
    }
  }
}

#main_navbar {
  background-color: cadetblue !important;
  justify-content: space-evenly;
}

.nav-item {
  padding: 0px 5px 0px 5px
}

#MainBody {
  padding: 30px 300px 20px 300px;
}

</style>
