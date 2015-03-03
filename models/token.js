'use strict';

module.exports = function(sequelize, DataTypes) {
  var Token = sequelize.define('Token', {
    value: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'token',
    timestamps: true,
    paranoid: false,
    underscored: true,
    associate: function(models) {
      Token.belongsTo(models.User);
      Token.belongsTo(models.Client);
    }
  });

  return Token;
};