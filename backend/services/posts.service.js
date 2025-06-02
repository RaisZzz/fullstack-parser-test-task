const Post = require("../models/post.model");

class PostsService {
  #postRepo;

  constructor() {
    this.#postRepo = new Post();
  }

  async getParsedPosts() {
    return this.#postRepo.getAll();
  }

  async parseNewPosts() {}
}

module.exports = PostsService;