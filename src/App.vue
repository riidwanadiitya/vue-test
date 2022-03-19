<template>
  <div id="app">
    <Headbar />
    <div class="contentBody">
      <Sidebar />
      <router-view/>
    </div>
  </div>
</template>

<script>
import Headbar from './components/Headbar.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'App',
  components: {
    Headbar,
    Sidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #e5e5e5;
  width: 100vw;
  height: 100vh;
}

.contentBody {
  display: flex;
}
</style>
