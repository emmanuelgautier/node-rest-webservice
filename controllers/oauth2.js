'use strict';

var URL = require('url'),

    oauth2orize = require(__dirname + '/../config/oauth2orize').oauth2orize,
    oauth2orizeJsonWebToken = require(__dirname + '/../config/oauth2orize').oauth2orizeJsonWebToken,

    login = require('connect-ensure-login'),

    db = require(__dirname + '/../config/db');

var authorizeRedirection = function(req, res) {
  var redirectURI = URL.parse(req.oauth2.req.redirectURI);

  if(redirectURI.search) {
    redirectURI.search += '&';
  } else {
    redirectURI.search = '?';
  }

  redirectURI.search += 'code=' + req.oauth2.code;

  redirectURI = URL.format(redirectURI);

  res.header('location', redirectURI);
  res.send(301);
};

exports.authorize = [
  login.ensureLoggedIn(),
  oauth2orize.authorize(function(clientId, redirectUri, done) {
    db.Client.find(clientId).then(function(client) {
      if (!client)
        return done(null, false);

      if (client.redirectUri != redirectUri)
        return done(null, false);

      done(null, client, client.redirectUri);
    }).catch(function(err) {
      done(err);
    });
  }),
  authorizeRedirection
];

exports.jwt = {
  authorize: [
    oauth2orizeJsonWebToken.authorize(function(issuer, done) {
      db.Client.find(issuer).then(function(client) {
        if (!client)
          return done(null, false);

        done(null, client);
      }).catch(function(err) {
        done(err);
      });
    }, function(client, user, scope, done) {
      done(null, true);
    })
  ],

  token: [
    oauth2orize.token(),
    oauth2orize.errorHandler()
  ]
};

exports.isAuthenticated = function() {
  return false;
};
