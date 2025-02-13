<script lang="ts">
import type { SortOption } from '@/types/app-types'
import type { PropType } from 'vue'

export default {
  name: 'app-select',
  props: {
    modelValue: { type: String, required: true },
    options: { type: Array as PropType<SortOption[]>, required: true, default: () => [] },
  },
  emits: ['update:modelValue'],
  methods: {
    changeOption(event: Event) {
      this.$emit('update:modelValue', (event.target as HTMLSelectElement).value)
    },
  },
}
</script>

<template>
  <select class="app-select" :value="modelValue" @change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<style scoped>
.app-select {
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
