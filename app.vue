<script setup>
const { data: posts } = await useFetch("/api/posts");
</script>

<template>
  <ul>
    <li v-for="post in posts">
      {{ post.title }}
    </li>
  </ul>
</template>
