'use strict';

var restify = require('restify');

module.exports = function(server) {
  server.use(restify.acceptParser(server.acceptable));
  server.use(restify.bodyParser({ mapParams: false }));
  server.use(restify.queryParser({ mapParams: false }));
};
