'use strict';

var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define('Author', {
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    gender: Sequelize.ENUM('m', 'f'),
    birthDate: Sequelize.DATE,
    deathDate: Sequelize.DATE,
    nationality: Sequelize.STRING,
    description: Sequelize.TEXT
  }, {
    tableName: 'author',
    timestamps: false
  });

  return Author;
};
