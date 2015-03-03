'use strict';

module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false
    },
    published_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    number_pages: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'book',
    timestamps: true,
    paranoid: true,
    underscored: true,
    associate: function(models) {
      Book.belongsTo(models.Author);
      Book.belongsTo(models.Editor);
    }
  });

  return Book;
};