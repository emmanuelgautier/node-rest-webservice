'use strict';

module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    isbn: DataTypes.STRING,
    published_at: DataTypes.DATE,
    numberOfPages: DataTypes.INTEGER,
    cover: DataTypes.STRING
  }, {
    tableName: 'book',
    associate: function(models) {
      Book.belongsTo(models.Author);
      Book.belongsTo(models.Editor);
    }
  });

  return Book;
};