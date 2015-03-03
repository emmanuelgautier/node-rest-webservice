'use strict';

module.exports = function(sequelize, DataTypes) {
    var Editor = sequelize.define('Editor', {
      name: {
      	type: DataTypes.STRING,
      	allowNull: false
      }
    }, {
      tableName: 'editor',
      timestamps: false,
      paranoid: true,
      underscored: true
    });

    return Editor;
};