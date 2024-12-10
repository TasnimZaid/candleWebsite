exports.seed = function(knex) {
  return knex('wishlists').del()
    .then(function () {
      return knex('wishlists').insert([
        {
          user_id: 1, // Assumes first user
          product_id: 1, // Assumes first product
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 1,
          product_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    });
};
