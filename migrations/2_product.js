exports.up = function(knex) {
  return knex.schema.createTable('products', function(table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('description');
    table.decimal('price', 8, 2).notNullable();
    table.string('size');
    table.decimal('length', 5, 2);
    table.decimal('width', 5, 2);
    table.decimal('height', 5, 2);
    table.boolean('is_box').defaultTo(false);  // Whether the product is sold in a box
    table.integer('pieces_per_box').defaultTo(1);
    table.integer('duration'); // Duration in hours
    table.json('colors');  // JSON array to store available colors
    table.json('scents');  // JSON array to store available scents (flavors)
    table.boolean('customizable').defaultTo(false);  // Whether the product can be customized
    table.boolean('available').defaultTo(true);  // Product availability
    table.json('images');  // JSON array to store image URLs
    table.decimal('piece_price', 8, 2);  // السعر للقطعة
    table.boolean('is_deleted').defaultTo(false);  // Whether the product is sold in a box
    table.timestamp('deleted_at');  
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products');
};
