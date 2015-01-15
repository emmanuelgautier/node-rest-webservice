'use strict';

var URL         = require('url'),

    oauth2orize = require(__dirname + '/../config/oauth2orize'),

    db          = require(__dirname + '/../config/db');

exports.authorize = [
  oauth2orize.authorize(function(clientId, redirectUri, done) {
    db.Client.find(clientId).success(function(client) {
      if (!client)
        return done(null, false);

      if (client.redirectUri != redirectUri)
        return done(null, false);

      done(null, client, client.redirectUri);
    }).error(function(err) {
      done(err);
    });
  }),
  function(req, res) {
    var redirectURI = URL.parse(req.oauth2.req.redirectURI);

    if(redirectURI.search) {
      redirectURI.search += '&';
    } else {
      redirectURI.search = '?';
    }

    redirectURI.search += 'code=' + req.oauth2.transactionID;

    redirectURI = URL.format(redirectURI);

    res.header('location', redirectURI);
    res.send(301);
  }
];

exports.decision = [
  oauth2orize.decision()
];

exports.token = [
  oauth2orize.token(),
  oauth2orize.errorHandler()
];

exports.isAuthenticated = function() {
  return false;
};
