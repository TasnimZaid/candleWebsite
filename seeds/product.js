exports.seed = function(knex) {
  return knex('products').del()
    .then(function () {
      return knex('products').insert([
        {
          name: 'Lavender Dream Candle',
          description: 'Soothing lavender scented candle for relaxation',
          price: 19.99,
          size: 'Medium',
          length: 10.5,
          width: 7.2,
          height: 7.2,
          is_box: true,
          pieces_per_box: 1,
          duration: 50,
          colors: JSON.stringify(['Purple', 'Lavender']),
          scents: JSON.stringify(['Lavender', 'Vanilla']),
          customizable: true,
          available: true,
          images: JSON.stringify([
            '/images/lavender-candle-1.jpg',
            '/images/lavender-candle-2.jpg'
          ]),
          piece_price: 19.99,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Vanilla Bliss Candle',
          description: 'Warm and comforting vanilla scented candle',
          price: 24.99,
          size: 'Large',
          length: 12.5,
          width: 8.5,
          height: 8.5,
          is_box: true,
          pieces_per_box: 1,
          duration: 80,
          colors: JSON.stringify(['Cream', 'White']),
          scents: JSON.stringify(['Vanilla', 'Caramel']),
          customizable: true,
          available: true,
          images: JSON.stringify([
            '/images/vanilla-candle-1.jpg',
            '/images/vanilla-candle-2.jpg'
          ]),
          piece_price: 24.99,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    });
};