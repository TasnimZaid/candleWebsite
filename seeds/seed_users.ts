import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();
 
    // Inserts seed entries
    await knex("users").insert([
        { username: "1", email: "rowValue1@gmail.com" ,  password: "1" },
   
    ]);
};
