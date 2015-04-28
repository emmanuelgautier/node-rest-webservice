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
    underscored: true,
    classMethods: {
      associate: function(models) {
        User.hasOne(models.Token);
      }
    }
  });

  return User;
};
