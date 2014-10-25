'use strict';

module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define('Author', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    gender: DataTypes.ENUM('m', 'f'),
    birthDate: DataTypes.DATE,
    deathDate: DataTypes.DATE,
    nationality: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    tableName: 'author',
    timestamps: false
  });

  return Author;
};
