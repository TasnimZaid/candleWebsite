// migrations/20240818_create_users.ts
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();                 // Auto-incrementing primary key
    table.string('username').notNullable().unique();  // Unique username
    table.string('email').notNullable().unique();     // Unique email
    table.string('password').notNullable();           // Hashed password
    table.string('first_name');                       // First name (optional)
    table.string('last_name');                        // Last name (optional)
    table.timestamp('created_at').defaultTo(knex.fn.now()); // Timestamp for user creation
    table.timestamp('updated_at').defaultTo(knex.fn.now()); // Timestamp for last update
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('users');
}
