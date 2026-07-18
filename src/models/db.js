const { Pool } = require('pg');

// Estos datos coinciden con lo que pusiste en docker-compose.yml
const pool = new Pool({
user: process.env.DB_USER,
host: process.env.DB_HOST,
database: process.env.DB_NAME,
password: process.env.DB_PASSWORD,
port: process.env.DB_PORT,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};