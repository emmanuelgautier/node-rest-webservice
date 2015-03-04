'use strict';

var config  = require(__dirname + '/config/config'),

    restify = require('restify'),
    server  = restify.createServer(config.server),

    db     = require(config.root + '/config/db');

require(config.root + '/config/server')(server);
require(config.root + '/config/oauth2orize');

require(config.root + '/routes')(server);

db.sequelize.sync().then(function() {
  server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
  });
});
