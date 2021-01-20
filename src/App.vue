<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link  to="/">Home</router-link> |
      <router-link to="/About">About</router-link> |
      <router-link to="/contacts">Contacts</router-link>
    </div>
    <button class="btn btn-danger">co bootstrap</button>
    <button class="btn btn-light">Light</button> -->
    <Layout />
  </div>
</template>
<script>
import Layout from "./components/Layout";
export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  display: flex;
}
</style>
