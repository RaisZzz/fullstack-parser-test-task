<script setup lang="ts">
import type {PostModel} from "@/models/post.model.ts";
import type {PropType} from "vue";

defineProps({
  post: { type: Object as PropType<PostModel>, required: true }
})
</script>

<template>
  <a class="post" :href="post.link" target="_blank">
    <p class="post__title">{{ post.title }}</p>
    <p class="post__description">{{ post.description }}</p>
    <p class="post__date">{{ post.createdAt.toLocaleDateString() }}</p>
  </a>
</template>

<style lang="sass" scoped></style>
