'use strict';

var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    var Editor = sequelize.define('Editor', {
      name: Sequelize.STRING
    }, {
      tableName: 'editor',
      timestamps: false,
      paranoid: true
    });

    return Editor;
};