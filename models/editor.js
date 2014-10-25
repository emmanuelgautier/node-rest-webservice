'use strict';

module.exports = function(sequelize, DataTypes) {
    var Editor = sequelize.define('Editor', {
      name: DataTypes.STRING
    }, {
      tableName: 'editor',
      timestamps: false,
      paranoid: true
    });

    return Editor;
};