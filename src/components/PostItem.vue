<script lang="ts">
import { defineComponent, type PropType } from 'vue'

interface Post {
  id: number
  title: string
  body: string
}

export default defineComponent({
  name: 'post-item',
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
})
</script>

<template>
  <li class="post-item">
    <div class="post-item-content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <app-button @click="$emit('remove', post)">Удалить</app-button>
    <app-button @click="$router.push(`/posts/${post.id}`)">Открыть</app-button>
  </li>
</template>

<style scoped>
.post-item {
  display: flex;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 4px;
  justify-content: space-between;
  align-items: baseline;
  text-transform: capitalize;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.post-item-leave-active {
  background-color: red;
  height: 0;
  opacity: 0;
}
.post-item h2 {
  margin-top: 0;
  color: #2c3e50;
}

.post-item p {
  margin-bottom: 0;
  color: #666;
}
</style>
