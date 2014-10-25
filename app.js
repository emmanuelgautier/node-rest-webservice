'use strict';

var fs      = require('fs'),
    path    = require("path"),

    config  = require('./config'),

    restify = require('restify'),
    server  = restify.createServer({
      name: config.server.name
    }),

    routes = require('./routes')(server),

    Sequelize = require('sequelize'),
    sequelize = new Sequelize(config.db.name, config.db.username, config.db.password, {
      dialect: config.db.dialect,
      port: config.db.port,
    }),
    db = {};

fs.readdirSync(config.models.path)
  .filter(function(file) {
    return (file.indexOf(".") !== 0);
  }).forEach(function(file) {
    var model = sequelize["import"](path.join(config.models.path, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

sequelize.sync().success(function() {
  server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
  });
});
