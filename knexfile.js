
export default {
  development: {
    client: 'pg',
    connection: {
      host:  'localhost',
      user:  'postgres',
      password:  '12345',
      database:  'candle',
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};
