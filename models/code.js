'use strict';

module.exports = function(sequelize, DataTypes) {
  var Code = sequelize.define('Code', {
    value: {
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
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'code',
    timestamps: true,
    paranoid: false,
    underscored: true,
    associate: function(models) {
      Code.belongsTo(models.User);
      Code.belongsTo(models.Client);
    }
  });

  return Code;
};
