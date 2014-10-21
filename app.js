'use strict';

var config = require('./config'),

    restify = require('restify'),
    server = restify.createServer({
      name: config.server.name
    }),

    Sequelize = require('sequelize'),
    sequelize = new Sequelize(config.db.name, config.db.username, config.db.password, {
      dialect: config.db.dialect,
      port: config.db.port,
    });

require('./routes')(server);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});