<script lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
import AppPostsList from '../components/AppPostsList.vue'
import PostsForm from '../components/PostsForm.vue'
import type { Post, SortOption } from '../types/app-types'

export default {
  components: {
    AppPostsList,
    PostsForm,
  },
  data() {
    return {
      posts: [] as Post[],
      dialogVisible: false,
      isPostsLoading: false,
      selectedOptions: '',
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' },
      ] as SortOption[],
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
    }
  },
  methods: {
    addPost(newPost: Post) {
      this.posts.push(newPost)
      this.dialogVisible = false
    },
    removePost(post: Post) {
      const index = this.posts.findIndex((p) => p.id === post.id)
      if (index > -1) {
        this.posts.splice(index, 1)
      }
    },
    showDialog() {
      this.dialogVisible = true
    },
    async fetchUsers() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        })
        this.posts = response.data
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
      } catch (error) {
        alert(error)
      } finally {
        this.isPostsLoading = false
      }
    },
    async getMorePosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        })
        this.posts = [...this.posts, ...response.data]
        this.page++
      } catch (error) {
        alert(error)
      }
    },
    // пагинация
    // changePage(page: number) {
    //   this.page = page
    //   this.fetchUsers()
    // },
  },
  mounted() {
    this.fetchUsers()
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        String(post1[this.selectedOptions as keyof Post]).localeCompare(
          String(post2[this.selectedOptions as keyof Post]),
        ),
      )
    },
    searchOnSortedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase()),
      )
    },
  },
}
</script>

<template>
  <div class="posts-view">
    <div class="posts-view-wrapper">
      <h1>Посты пользователей</h1>
      <div class="posts-view-wrapper-controls-search">
        <app-input v-model="searchQuery" placeholder="Поиск" />
      </div>
      <div class="posts-view-wrapper-controls">
        <div class="posts-view-wrapper-cotrols-main">
          <app-button @click="showDialog">Добавить пост</app-button>
          <app-select v-model="selectedOptions" :options="sortOptions" />
        </div>
        <!-- пагинация -->
        <!-- <div class="page-wrapper">
          <div
            v-for="currPage in totalPages"
            :key="currPage"
            class="page-item"
            :class="{ 'current-page': currPage === page }"
            @click="changePage(currPage)"
          >
            {{ currPage }}
          </div>
        </div> -->
      </div>
    </div>
    <div class="posts-list-wrapper" v-if="posts.length > 0">
      <app-posts-list v-if="!isPostsLoading" :posts="searchOnSortedPosts" @remove="removePost" />
      <div v-else>
        <h3>Идет загрузка...</h3>
      </div>
    </div>
    <h1 v-else>Посты не найдены</h1>
  </div>
  <div v-itersection="getMorePosts" class="observer"></div>
  <app-dialog v-model:show="dialogVisible">
    <PostsForm @add-post="addPost" />
  </app-dialog>
</template>

<style>
.observer {
  height: 30px;
  background-color: red;
}
.posts-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 0 auto;
}

.posts-view-wrapper {
  width: 100%;
}

.posts-list-wrapper {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  width: 100%;
}
.posts-view-wrapper-controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.posts-view-wrapper-controls-search input {
  width: 100%;
  box-sizing: border-box;
  margin: 0;
}
.posts-view-wrapper-controls-search {
  box-sizing: border-box;
  margin-bottom: 20px;
}

.posts-view-wrapper-cotrols-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.page-wrapper {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.page-item {
  background-color: #252525;
  color: #fff;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  border-radius: 50%;
  user-select: none;
}
.current-page {
  background-color: #ffffff;
  color: #ec0000;
  border: 1px solid #000000;
}
</style>
