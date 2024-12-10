exports.up = function(knex) {
    return knex.schema.createTable('categories', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable().unique();
      table.boolean('is_deleted').defaultTo(false); 
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('categories');
  };
  