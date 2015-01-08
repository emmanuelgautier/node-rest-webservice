'use strict';

var restify = require('restify'),

  sessions = require('client-sessions');

module.exports = function(server) {

  server.use(restify.acceptParser(server.acceptable));

  server.use(restify.bodyParser({
    mapParams: false
  }));

  server.use(restify.queryParser({
    mapParams: false
  }));

  server.use(sessions({
    cookieName: 'sid',
    secret: 'key',
    duration: 24 * 60 * 60 * 1000,
    activeDuration: 1000 * 60 * 5
  }));
};
