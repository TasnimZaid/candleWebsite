exports.up = function(knex) {
    return knex.schema.createTable('wishlists', function(table) {
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').notNullable();
      table.integer('product_id').references('id').inTable('products').onDelete('CASCADE').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('wishlists');
  };
  