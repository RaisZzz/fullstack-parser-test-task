<script lang="ts" setup>
import {usePostsStore} from "@/stores/posts.ts";
import {onMounted, ref, type Ref} from "vue";

const postsStore = usePostsStore()

const postsQuery: Ref<string> = ref('')

const searchPosts = (): void => {
  if (!postsQuery.value.length) return
  
  postsStore.parseNewPosts(postsQuery.value)
}

onMounted(postsStore.getPosts)
</script>

<template>
  <input v-model="postsQuery" type="text">
  <button @click="searchPosts"></button>
  <p>{{ postsStore.posts }}</p>
</template>
