import {defineStore} from "pinia";
import type {Ref} from "vue";
import {ref} from "vue";
import {getPostModelFromJson, type PostModel} from "@/models/post.model.ts";
import axios from "axios";

export const usePostsStore = defineStore('posts', () => {
  const posts: Ref<PostModel[]> = ref([])

  async function getPosts(): Promise<void> {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/parse`)
    const parsedPosts = response.data?.posts
    if (!Array.isArray(parsedPosts)) return

    posts.value.splice(0, posts.value.length)

    for (const post of parsedPosts) {
      posts.value.push(getPostModelFromJson(post));
    }
  }

  return { posts, getPosts }
})
