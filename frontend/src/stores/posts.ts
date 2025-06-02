import {defineStore} from "pinia";
import type {Ref} from "vue";
import {ref} from "vue";
import type {PostModel} from "@/models/post.model.ts";

export const usePostsStore = defineStore('posts', () => {
  const posts: Ref<PostModel[]> = ref([])

  return { posts }
})
