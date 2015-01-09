'use strict';

var oauth2orize = require(__dirname + '/../config/oauth2orize'),

    db          = require(__dirname + '/../config/db');

exports.authorize = [
  oauth2orize.authorize(function(clientID, redirectURI, done) {
    db.Client.find(clientID).success(function(client) {
      if (!client)
        return done(null, false);

      if (!client.redirectUri != redirectURI)
        return done(null, false);

      done(null, client, client.redirectURI);
    }).error(function(err) {
      done(err);
    });
  }),
  function(req, res) {
    res.render('dialog', {
      transactionID: req.oauth2.transactionID,
      user: req.user,
      client: req.oauth2.client
    });
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
