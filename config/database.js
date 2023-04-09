require('dotenv').config();
const globals = require("./global.js");
const {db_name} = globals;
const {db_user} = globals;
const {db_pass} = globals;
const {db_port} = globals;
const {db_host} = globals;
const port = process.env.PORT || 3000;

module.exports = {
  "development": {
    "username": db_user,
    "password": db_pass,
    "database": db_name,
    "host": db_host,
    "port": db_port,
    // "url": db_url,
    "dialect": "mysql",
    "define": {
      "timestamps": false
    },
    "logging": false,
    "pool": {
      "max": 5,
      "min": 0,
      "idle": 10000
    },
    "dialectOptions": {
      "connectTimeout": 30000
    }
  },
  "test": {
    "username": db_user,
    "password": db_pass,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql"
  },
  "production": {
    "username": db_user,
    "password": db_pass,
    "database": db_name,
    "host": db_host,
    "dialect": "mysql"
  }
}