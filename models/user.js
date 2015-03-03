'use strict'

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
    	type: DataTypes.STRING,
    	allowNull: false
    },
    password: {
    	type: DataTypes.STRING,
    	allowNull: false
    }
  }, {
    tableName: 'user',
    timestamps: true,
    paranoid: true,
    underscored: true
  });

  return User;
};
