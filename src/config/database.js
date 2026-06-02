const { Pool } = require('pg');

const pool = new Pool({
  user: 'omar',
  host: 'localhost',
  database: 'bibliotheque',
  password: 'omar123',
  port: 5432,
});

module.exports = pool;