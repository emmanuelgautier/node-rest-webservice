'use strict';

module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define('Author', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM('1', '2'),
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    death_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'author',
    timestamps: true,
    paranoid: true,
    underscored: true
  });

  return Author;
};
