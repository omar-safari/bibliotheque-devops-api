const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER || 'omar',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'bibliotheque',
  password: process.env.DB_PASSWORD || 'omar123',
  port: process.env.DB_PORT || 5432,
});

module.exports = pool;