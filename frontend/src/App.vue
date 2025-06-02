<script lang="ts" setup>
import {usePostsStore} from "@/stores/posts.ts";
import {onMounted, ref, type Ref} from "vue";
import PostCard from "@/components/post/PostCard.vue";

const postsStore = usePostsStore()

const postsQuery: Ref<string> = ref('')

const searchPosts = (): void => {
  if (!postsQuery.value.length) return

  postsStore.parseNewPosts(postsQuery.value)
}

onMounted(postsStore.getPosts)
</script>

<template>
  <div class="container">
    <form @submit.prevent="searchPosts">
      <input v-model="postsQuery" type="text" placeholder="Поиск...">
      <input type="submit" value="Найти" />
    </form>
    <div class="posts">
      <PostCard v-for="post in postsStore.posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>
