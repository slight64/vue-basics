<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app-button',
  props: {},
})
</script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  height: 35px;
  user-select: none;
}
</style>
