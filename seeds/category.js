// seeds/02_categories.js
exports.seed = function(knex) {
  return knex('categories').del()
    .then(function () {
      return knex('categories').insert([
        {
          name: 'Scented Candles',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Decorative Candles',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Aromatherapy Candles',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    });
};