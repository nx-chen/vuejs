<template>
  <div id="bodyTab">
    <div id="Scoll_Navbar">
      <b-navbar variant="info" sticky>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/Navbar" fixed>Navbar</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/Table">Table</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/">Home</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
      <div>
        <p class="long_text">I'am a long text for test the property <span class="name_property">sticky</span> :)</p>
        <br>
        <p class="long_text">I'am a long text for test the property <span class="name_property">sticky</span> :)</p>
        <br>
        <p class="long_text">I'am a long text for test the property <span class="name_property">sticky</span> :)</p>
        <br>
         <p class="long_text">I'am a long text for test the property <span class="name_property">sticky</span> :)</p>
        <br>
        <p class="long_text">I'am a long text for test the property <span class="name_property">sticky</span> :)</p>
        <br>
        <p class="long_text">I'am a long text for test the property <span class="name_property">sticky</span> :)</p>
        <br>
         <p class="long_text">I'am a long text for test the property <span class="name_property">sticky</span> :)</p>
        <br>
        <p class="long_text">I'am a long text for test the property <span class="name_property">sticky</span> :)</p>
        <br>
        <p class="long_text">I'am a long text for test the property <span class="name_property">sticky</span> :)</p>
        <br>
      </div>
    </div>
    <b-navbar variant="success" fixed="bottom">
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/Navbar" fixed>Navbar</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item disabled=true>
            A navbar with property "fixed=bottom"
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar>
  </div>
</template>

<style lang="less">
#Scoll_Navbar {
  height: 500px;
  overflow-y: auto;
  background-color: aliceblue;
}

.long_text {
  font-size: 65px;
}
</style>
