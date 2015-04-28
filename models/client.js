'use strict';

module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define('Client', {
    client_secret: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'client',
    timestamps: true,
    paranoid: false,
    underscored: true,
    classMethods: {
      associate: function(models) {
        Client.belongsTo(models.User, { as: 'User', foreignKey: 'user_id' });
      }
    }
  });

  return Client;
};
