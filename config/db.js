'use strict';

var fs        = require('fs'),
    path      = require('path'),
    Sequelize = require('sequelize'),
    config    = require(__dirname + '/../config/config'),
    sequelize = new Sequelize(config.db.name, config.db.username, config.db.password, {
      dialect: config.db.dialect,
      port: config.db.port,
      logging: false,
      native: true,
      define: {
        underscored: true,
        charset: 'utf8',
        collate: 'utf8_general_ci'
      }
    }),
    db        = {};

fs.readdirSync(config.paths.models)
  .filter(function(file) {
    return (file.indexOf('.') !== 0);
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(config.paths.models, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
