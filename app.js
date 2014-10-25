'use strict';

var config  = require(__dirname + '/config/config'),



    restify = require('restify'),
    server  = restify.createServer({
      name: config.server.name
    }),

    db     = require(config.root + '/config/db'),

    routes = require(config.root + '/routes')(server);

db.sequelize.sync().success(function() {
  server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
  });
});
