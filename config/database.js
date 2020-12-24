const db_uri_parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        username: config.username,
        password: config.password,
        ssl: {
          rejectUnauthorized: false
        }
      },
      options: {
        ssl: true
      },
    },
  },
});
