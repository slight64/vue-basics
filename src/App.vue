<script lang="ts">
import AppNavbar from './components/AppNavbar.vue'

export default {
  components: {
    'app-navbar': AppNavbar,
  },
}
</script>

<template>
  <div class="app">
    <app-navbar />
    <router-view />
  </div>
</template>

<style>
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 0 auto;
}
</style>
