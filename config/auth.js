'use strict';

var Joi = require('joi'),
    Boom = require('boom'),
    uid = require('uid2');

var db = require('./db');

module.exports = function(server, config) {

  server.register(require('hapi-auth-bearer-token'), function(err) {

    server.auth.strategy('bearer', 'bearer-access-token', {
      allowQueryToken: false,
      allowMultipleHeaders: false,
      accessTokenName: 'access_token',
      validateFunc: function(token, callback) {

        db.Token.find({ where: { value: token }, include: [db.User] }).then(function(userToken) {
          if(!userToken) {
            callback(null, false);
          }

          console.log(userToken.User);

          callback(null, true, { scope: 'user' });
        }).catch(function(err) {
          console.log(err);
          callback(null, false);
        });
      }
    });
  });
};
