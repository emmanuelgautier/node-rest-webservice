'use strict';

module.exports = function(server, config) {

  server.register({
    register: require('good'),
    options: {
      opsInterval: config.logging.interval,
      reporters: [{
        reporter: require('good-console'),
        events: { log: '*', response: '*' }
      }, {
        reporter: require('good-file'),
        events: { log: '*', ops: '*' },
        config: {
          path: config.logging.logDirPath,
          prefix: config.logging.logPrefix
        }
      }, {
        reporter: require('good-file'),
        events: { error: '*' },
        config: {
          path: config.logging.errorDirPath,
          prefix: config.logging.errorPrefix
        }
      }]
    }
  }, function(err) {
    if(err) {
      console.error(err);
    }
  });

  server.register({
    register: require('lout')
  }, function(err) {
    console.error(err);
  });
};
