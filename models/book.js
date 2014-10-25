'use strict';

var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define('Book', {
    title: Sequelize.STRING,
    isbn: Sequelize.STRING,
    published_at: Sequelize.DATE,
    numberOfPages: Sequelize.INTEGER,
    cover: Sequelize.STRING
  }, {
    tableName: 'book',
    associate: function(models) {
      Book.belongsTo(models.Author);
      Book.belongsTo(models.Editor);
    }
  });

  return Book;
};