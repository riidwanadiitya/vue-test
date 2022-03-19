<template>
  <div class="sidebarContent">
    <div class="navContainer">
      <b-nav vertical>
        <router-link class="linkStyle" to="/beranda"
          ><b-icon icon="house-fill"></b-icon> Beranda</router-link
        >
        <router-link class="linkStyle" to="/"
          ><b-icon icon="person-fill"></b-icon> Personnel-List</router-link
        >
        <router-link class="linkStyle" to="/daily-attendence"
          ><b-icon icon="calendar-fill"></b-icon> Daily Attendence</router-link
        >
      </b-nav>
    </div>
  </div>
</template>
<style>
.sidebarContent {
  height: 90vh;
  width: 20vw;
  background-color: white;
  padding: 10px;
}

.navContainer {
  margin-left: 30px;
}

.linkStyle {
  color: black;
  text-decoration: none;
  font-weight: 600;
}

.linkStyle:hover {
  color: #2fbec0;
}
</style>
