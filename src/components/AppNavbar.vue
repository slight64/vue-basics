<script lang="ts">
import AppButton from './ui/AppButton.vue'

export default {
  components: {
    'my-button': AppButton,
  },
  name: 'app-navbar',
}
</script>

<template>
  <div class="navbar-wrapper">
    <div class="navbar">
      <my-button @click="$router.push('/users')">Users</my-button>
      <my-button @click="$router.push('/posts')">Posts</my-button>
    </div>
    <div>
      <my-button @click="$router.back()">Назад</my-button>
    </div>
  </div>
</template>

<style>
.navbar-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #5f5f5f;
}
</style>
