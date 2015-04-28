'use strict';

module.exports = function(sequelize, DataTypes) {
  var Token = sequelize.define('Token', {
    value: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER
    },
    client_id: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'token',
    timestamps: true,
    paranoid: false,
    underscored: true,
    classMethods: {
      associate: function(models) {
        Token.belongsTo(models.User, { as: 'User', foreignKey: 'user_id' });
        Token.belongsTo(models.Client, { as: 'Client', foreignKey: 'client_id' });
      }
    }
  });

  return Token;
};