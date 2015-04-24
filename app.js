'use strict';

var Hapi    = require('hapi'),
    config  = require('./config/config'),

    db = require('./config/db'),
    validator = require('./config/validator');

var server = new Hapi.Server();
server.connection({
  host: config.server.host,
  port: config.server.port
});

require('./config/hapi')(server, config);
require('./config/auth')(server, config);
require(config.paths.routes)(server, config);

db.sequelize.sync().then(function() {
  server.start(function () {
      console.log('Server running at:', server.info.uri);
  });
});
