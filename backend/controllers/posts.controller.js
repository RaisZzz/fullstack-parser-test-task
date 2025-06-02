const PostsService = require('../services/posts.service');

class PostsController {
  #postsService;

  constructor() {
    this.#postsService = new PostsService();
  }

  getParsedPosts = async (req, res, next) => {
    const posts = await this.#postsService.getParsedPosts();
    res.json({ posts })
  }
}

module.exports = PostsController;