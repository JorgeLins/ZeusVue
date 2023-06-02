<template>
  <AppHeader />
  <div class="flex gap-36 pl-20 pr-20 pt-24 max-md:flex-col max-md:pl-9">
    <AppForms />
    <AppList />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppForms from "./components/AppForms.vue";
import AppList from "./components/AppList.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppForms,
    AppList,
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
