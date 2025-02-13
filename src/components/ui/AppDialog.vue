<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app-dialog',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false)
    },
  },
})
</script>
<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div class="dialog-content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>
<style>
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
}

.dialog-content {
  margin: auto;
  background-color: white;
  border-radius: 12px;
  padding: 20px;
}
</style>
