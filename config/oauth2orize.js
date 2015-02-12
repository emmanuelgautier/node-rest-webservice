'use strict';

var passport                = require('passport'),
    oauth2orize             = require('oauth2orize'),
    BearerStrategy          = require('passport-http-bearer').Strategy,

    db = require(__dirname + '/../config/db'),

    server = oauth2orize.createServer();

passport.use(new BearerStrategy(function(token, done) {
  db.User.find({ where: { token: token } }).success(function(user) {
    if(!user)
      return done(null, false);

    done(null, user, { scope: 'read' });
  }).error(function(err) {
    done(new restify.InternalError(err.message));
  });
}));

server.grant(oauth2orize.grant.code(function(client, redirectUri, user, ares, done) {
  var code = utils.uid(16);

  db.Code.create({
    value: code,
    redirectUri: redirectUri,
    userId: user.id,
    clientId: client.id
  }).success(function(code) {
    done(null, code.code);
  }).error(function(err) {
    done(err);
  });
}));

server.exchange(oauth2orize.exchange.code(function(client, code, redirectUri, done) {
  db.Code.find({ where: { code: code } }).success(function(authCode) {
    if (authCode === undefined)
      return done(null, false);

    if (client.id !== authCode.clientId)
      return done(null, false);

    if (redirectUri !== authCode.redirectUri)
      return done(null, false);

    db.code.delete({ where: { code: code } }).success(function(code) {
      var token = utils.uid(256);

      db.Token.create({
        value: token,
        userId: authCode.userId,
        clientId: authCode.clientId
      }).success(function(token) {
        done(null, token.token);
      }).error(function(err) {
        done(err);
      });

    }).error(function(err) {
      done(err);
    });
  }).error(function(err) {
    done(err);
  });
}));

server.serializeClient(function(client, done) {
  done(null, client.id);
});

server.deserializeClient(function(id, done) {
  db.Client.find(id).success(function(client) {
    done(null, client);
  }).error(function(err) {
    done(err);
  });
});

module.exports = server;
