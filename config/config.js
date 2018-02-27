require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.USERNAME,
    "password": process.env.PASS,
    "database": "test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.USERNAME,
    "password": process.env.PASS,
    "database": "test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.USERNAME,
    "password": process.env.PASS,
    "database": "test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
