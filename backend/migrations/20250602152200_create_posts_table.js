/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('posts', function(table) {
    table.increments('id').primary();
    table.string('link').notNullable().unique();
    table.string('title').notNullable();
    table.text('descr').notNullable();
    table.specificType('date', 'timestamp without time zone').notNullable();

    table.index(['title', 'descr'], 'posts_search_idx');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
