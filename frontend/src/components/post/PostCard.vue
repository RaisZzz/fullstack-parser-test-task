<script setup lang="ts">
import type {PostModel} from "@/models/post.model.ts";
import type {PropType} from "vue";

defineProps({
  post: { type: Object as PropType<PostModel>, required: true }
})
</script>

<template>
  <a class="post" :href="post.link" target="_blank">
    <span class="post__top">
      <span class="post__title">{{ post.title }}</span>
      <span class="post__date">{{ post.createdAt.toLocaleDateString() }}</span>
    </span>
    <span class="post__description">{{ post.description }}</span>
  </a>
</template>

<style lang="sass" scoped>
@use '@/assets/sass/variables' as *

.post
  padding: 15px
  border-radius: 12px
  border: 2px solid #ecf0f1
  display: flex
  flex-direction: column
  gap: 10px
  text-decoration: none
  background-color: $background-color
  color: $on-background-color

  &__top
    width: 100%
    display: flex
    align-items: center
    justify-content: space-between
    gap: 10px

  &__title
    font-weight: 600

  &__description
    font-size: 15px

  &__date
    font-size: 12px
    opacity: 0.5
</style>
