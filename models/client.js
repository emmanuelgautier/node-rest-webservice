'use strict';

module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define('Client', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    secret: {
      type: DataTypes.STRING,
      allowNull: false
    },
    redirect_uri: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'client',
    timestamps: true,
    paranoid: false,
    underscored: true,
    associate: function(models) {
      Client.belongsTo(models.User);
    }
  });

  return Client;
};
