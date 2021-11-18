<template>
  <div id="app">
    <grocery-list />
  </div>
</template>

<script>
import GroceryList from "./components/GroceryList.vue";

export default {
  name: "App",
  components: {
    GroceryList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
