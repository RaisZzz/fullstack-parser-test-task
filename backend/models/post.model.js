const knex = require("../config/knex")

class Post {
  async getByLink(link = '') {
    return knex('posts').select('*').where({ link }).first()
  }

  async create({ link, title, description }) {
    return knex('posts').insert({ link, title, descr: description })
  }

  async getAll() {
    return knex('posts').select('*');
  }
}

module.exports = Post;