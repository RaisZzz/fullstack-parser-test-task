<script lang="ts" setup>
import {usePostsStore} from "@/stores/posts.ts";
import {onMounted} from "vue";

const postsStore = usePostsStore()
onMounted(postsStore.getPosts)
</script>

<template>
  <p>{{ postsStore.posts }}</p>
</template>
