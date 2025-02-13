<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app-input',
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
})
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :placeholder="placeholder"
    class="input"
  />
</template>

<style>
.input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 4px;
}
</style>
