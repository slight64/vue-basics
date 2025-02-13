<script lang="ts">
import gsap from 'gsap'
import { defineComponent, type PropType } from 'vue'
import PostItem from './PostItem.vue'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export default defineComponent({
  name: 'app-posts-list',
  components: { PostItem },
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true,
    },
  },
  emits: ['remove'],
  methods: {
    onBeforeEnter(el: Element) {
      const htmlEl = el as HTMLElement
      htmlEl.style.opacity = '0'
      htmlEl.style.transform = 'translateX(130px)'
    },
    onEnter(el: Element, done: () => void) {
      gsap.to(el as HTMLElement, {
        opacity: 1,
        transform: 'translateX(0)',
        duration: 0.7,
        ease: 'power2.inOut',
        onComplete: done,
      })
    },
    onLeave(el: Element, done: () => void) {
      gsap
        .to(el as HTMLElement, {
          opacity: 0,
          color: '#000',
          transform: 'translateX(-130px)',
          duration: 0.5,
          ease: 'power2.inOut',
        })
        .then(done)
    },
  },
})
</script>

<template>
  <ul class="posts-list">
    <transition-group
      name="post"
      tag="ul"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <post-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
        ref="postItem"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </ul>
</template>

<style scoped>
.posts-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.posts-list > ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
</style>
