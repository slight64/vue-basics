<script setup lang="ts"></script>

<template>
  <main class="main">
    <h1>Home</h1>
    <ul class="links">
      <li class="link">
        <router-link class="link-item" to="/posts">Посты</router-link>
      </li>
      <li class="link">
        <router-link class="link-item" to="/users">Пользователи</router-link>
      </li>
    </ul>
  </main>
</template>

<style>
.links {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.link {
  list-style: none;
}
.link-item {
  text-decoration: none;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 5px;
  transition: all 0.3s ease;
}
.link-item:hover {
  background-color: #000;
  color: #fff;
}
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.main h1 {
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: #000;
}
</style>
