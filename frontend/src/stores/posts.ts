import {defineStore} from "pinia";
import type {Ref} from "vue";
import {ref} from "vue";
import {getPostModelFromJson, type PostModel} from "@/models/post.model.ts";
import axios from "axios";

export const usePostsStore = defineStore('posts', () => {
  const postsLoading: Ref<boolean> = ref(false)
  const posts: Ref<PostModel[]> = ref([])

  async function getPosts(): Promise<void> {
    if (postsLoading.value) return

    postsLoading.value = true

    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/parse`)
      const parsedPosts = response.data?.posts
      if (!Array.isArray(parsedPosts)) return

      posts.value.splice(0, posts.value.length)

      for (const post of parsedPosts) {
        posts.value.push(getPostModelFromJson(post));
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {}

    postsLoading.value = false
  }

  async function parseNewPosts(query: string): Promise<void> {
    if (postsLoading.value) return

    postsLoading.value = true

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/parse`, {
        query,
      })

      posts.value.splice(0, posts.value.length)

      const parsedPosts = response.data?.posts
      if (!Array.isArray(parsedPosts)) return

      for (const post of parsedPosts) {
        posts.value.push(getPostModelFromJson(post));
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {}

    postsLoading.value = false
  }

  return { posts, postsLoading, getPosts, parseNewPosts }
})
