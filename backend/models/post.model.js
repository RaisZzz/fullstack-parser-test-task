const knex = require("../config/knex")

class Post {
  async getByLink(link = '') {
    return knex('posts').select('*').where({ link }).first()
  }

  async getAll() {
    return knex('posts').select('*');
  }

  async create({ link, title, description, createdAt }) {
    const [post] = await knex('posts').insert({ link, title, descr: description, date: createdAt }).returning('*')
    return post
  }

  async destroyAll() {
    return knex('posts').delete()
  }
}

module.exports = Post;