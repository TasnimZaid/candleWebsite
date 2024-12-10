exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'candlelover',
          email: 'candlelover@example.com',
          password: 'hashedpassword123', // In real scenario, use proper password hashing
          role: 'user',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          username: 'adminuser',
          email: 'admin@candlestore.com',
          password: 'hashedpassword456',
          role: 'admin',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    });
};




