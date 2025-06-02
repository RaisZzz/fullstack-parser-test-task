<script lang="ts" setup>
import {usePostsStore} from "@/stores/posts.ts";
import {onMounted, ref, type Ref} from "vue";
import PostCard from "@/components/post/PostCard.vue";
import MainLoader from "@/components/MainLoader.vue";

const postsStore = usePostsStore()

const postsQuery: Ref<string> = ref('')

const searchPosts = (): void => {
  if (!postsQuery.value.length) return

  postsStore.parseNewPosts(postsQuery.value)
}

onMounted(postsStore.getPosts)
</script>

<template>
  <div class="container posts__container">
    <form
      class="posts__form"
      :class="{ active : postsStore.posts.length }"
      @submit.prevent="searchPosts"
    >
      <input class="input posts__input" v-model="postsQuery" type="text" placeholder="Поиск...">
      <input class="button posts__button" type="submit" value="Найти" />
    </form>
    <TransitionGroup name="fade">
      <MainLoader v-if="postsStore.postsLoading" class="posts__loader" :size="30" color="#778beb" />
      <div v-else class="posts">
        <PostCard v-for="post in postsStore.posts" :key="post.id" :post="post" />
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="sass" scoped>
.posts
  height: 100%
  width: 100%
  overflow-y: auto
  padding-top: 100px
  display: flex
  flex-direction: column
  gap: 10px

  &__container
    height: 100dvh
    width: 100vw
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    gap: 20px
    position: relative

  &__form
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    display: flex
    align-items: stretch
    transition: 1s
    z-index: 3

    &.active
      top: 40px
      transform: translate(-50%, 0)

  &__input
    min-width: 300px
    max-width: 100%
    border-top-right-radius: 0
    border-bottom-right-radius: 0

  &__button
    border-top-left-radius: 0
    border-bottom-left-radius: 0
    min-width: 100px
    max-width: 100%

  &__loader
    position: absolute
    top: calc(50% + 50px)
    left: calc(50% - 15px)
    transform: translate(-50%, -50%)
</style>
