'use strict';

module.exports = function(sequelize, DataTypes) {
  var Code = sequelize.define('Code', {
    value:        { type: DataTypes.STRING,   allowNull: false },
    redirectUri:  { type: DataTypes.STRING,   allowNull: false },
    userId:       { type: DataTypes.INTEGER,  allowNull: false },
    clientId:     { type: DataTypes.INTEGER,  allowNull: false }
  }, {
    tableName: 'code',
    timestamps: false,
    associate: function(models) {
      Code.belongsTo(models.User);
      Code.belongsTo(models.Client);
    }
  });

  return Code;
};
