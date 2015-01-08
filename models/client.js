'use strict';

module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define('Client', {
    name: { type: DataTypes.STRING,  allowNull: false },
    id: { type: DataTypes.INTEGER,  allowNull: false },
    secret: { type: DataTypes.STRING,  allowNull: false },
    userId: { type: DataTypes.INTEGER,  allowNull: false }
  }, {
    tableName: 'client',
    timestamps: false,
    associate: function(models) {
      Client.belongsTo(models.User);
    }
  });

  return Client;
};
