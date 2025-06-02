const PostsService = require('../services/posts.service');
const createError = require('http-errors')

class PostsController {
  #postsService;

  constructor() {
    this.#postsService = new PostsService();
  }

  getParsedPosts = async (req, res, next) => {
    const posts = await this.#postsService.getParsedPosts();
    res.json({ posts })
  }

  parseNewPosts = async (req, res, next) => {
    const body = req.body
    if (!body) throw createError.BadRequest('Body is required')

    const { query } = body
    if (typeof query !== 'string' || !query.length) {
      throw createError.BadRequest('"query" string is required and should not be empty')
    }

    const posts = await this.#postsService.parseNewPosts(query);
    res.json({ posts })
  }
}

module.exports = PostsController;