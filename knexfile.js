// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/principles.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/principles-test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
