<template>
  <AppHeader />
  <AppForms />

</template>

<script>

import AppHeader from './components/AppHeader.vue';
import AppForms from './components/AppForms.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppForms
  }
}
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
