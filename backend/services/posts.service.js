const Post = require("../models/post.model")
const cheerio = require('cheerio')
const axios = require('axios')
const createError = require('http-errors');
const {parseRussianDate} = require("../helpers");

class PostsService {
  #postRepo;

  constructor() {
    this.#postRepo = new Post();
  }

  async getParsedPosts() {
    return this.#postRepo.getAll();
  }

  async parseNewPosts(query = '') {
    const parsedPosts = []
    const createdPosts = []
    const lowerQuery = query.toLowerCase()

    // Parse new posts
    try {
      const { data } = await axios.get('https://is-systems.org/blog');
      const $ = cheerio.load(data);

      for (const el of $('article.widg_newsblock_element')) {
        const title = $(el).find('[itemprop="name headline"]').text()
        const description = $(el).find('[itemprop="description"]').text()

        if (!title.toLowerCase().includes(lowerQuery) && !description.toLowerCase().includes(lowerQuery)) {
          continue
        }

        const postPath = $(el).find('a.widg_news_link').attr('href')
        const link = `https://is-systems.org${postPath}`
        const createdAt = $(el).find('.widg_news_pub_time').text()
        const createdAtDate = parseRussianDate(createdAt)

        parsedPosts.push({ link, title, description, createdAt: createdAtDate })
      }
    } catch (e) {
      console.error('Posts parsing error:', e)
      throw createError.Conflict(`Posts parsing error: ${e}`);
    }

    // Destroy old posts
    await this.#postRepo.destroyAll()

    // Create new posts
    for (const post of parsedPosts) {
      const createdPost = await this.#postRepo.create(post)
      createdPosts.push(createdPost)
    }

    return createdPosts
  }
}

module.exports = PostsService;