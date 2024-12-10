// migrations/xxxx_create_customizations_table.js
exports.up = function(knex) {
    return knex.schema.createTable('customizations', function (table) {
      table.increments('id').primary();
      table.integer('product_id').references('id').inTable('products').onDelete('CASCADE').notNullable();
      table.string('message').nullable(); 
      table.string('type').nullable(); 
      table.string('note').nullable(); 
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('customizations');
  };
  