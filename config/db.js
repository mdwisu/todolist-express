const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todolist_skilvul', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
