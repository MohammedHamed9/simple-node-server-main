// src/database.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('shop_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;