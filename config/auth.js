'use strict';

var Joi = require('joi'),
    Boom = require('boom');

var db = require('./db');

module.exports = function(server, config) {

  server.register(require('hapi-auth-bearer-token'), function(err) {

    server.auth.strategy('bearer', 'bearer-access-token', {
      allowQueryToken: false,
      allowMultipleHeaders: false,
      accessTokenName: 'access_token',
      validateFunc: function(token, callback) {

        db.Token.find({ where: { value: token } }).then(function(userToken) {
          if(!userToken) {
            return callback(null, false);
          }

          callback(null, true, { scope: 'user', user: userToken.getUser() });
        }).catch(function(err) {
          console.log(err);
          callback(null, false);
        });
      }
    });
  });
};
