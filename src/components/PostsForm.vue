<script lang="ts">
interface Post {
  id?: number
  title: string
  body: string
}

export default {
  name: 'post-form',
  data() {
    return {
      post: {
        title: '',
        body: '',
      } as Post,
    }
  },
  methods: {
    createPost() {
      const newPost = { ...this.post, id: Date.now() }
      this.$emit('add-post', newPost)
      this.post = {
        title: '',
        body: '',
      }
    },
  },
}
</script>

<template>
  <form action="submit" @submit.prevent="createPost">
    <app-input type="text" v-model.trim="post.title" placeholder="Title" />
    <app-input type="text" v-model.trim="post.body" placeholder="Post content" />
    <app-button type="submit">Add Post</app-button>
  </form>
</template>
