// require('dotenv').config();

const default = {
  client: 'postgresql',
  seeds: { directory: './data/seeds' },
  migrations: { directory: './data/migrations'}
},

module.exports = {
  development: { ...default, connection: '' },
  test: { ...default, connection: '' },
  production: {...default, connection: ''}
}