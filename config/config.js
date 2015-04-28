'use strict';

/*jshint maxlen: 1000 */

var path      = require('path'),
    rootPath  = path.normalize(__dirname + '/..'),
    env       = process.env.NODE_ENV || 'development';

var config = {
  env: env,
  root: rootPath,
  app: {
    name: 'webservice',
    privateKey: 'secret'
  },
  server: {
    host: 'localhost',
    port: 80
  },
  db: {
    name: 'userwebservice',
    username: 'root',
    password: null,
    dialect: 'mysql',
    port: 3306
  },
  logging: {
    interval: 1000,
    logDirPath: rootPath + '/logs',
    logPrefix: 'log',
    errorDirPath: rootPath + '/logs',
    errorPrefix: 'error'
  },
  caching: {
    expiresIn: 60000
  },
  paths: {
    routes: rootPath + '/routes',
    controllers: rootPath + '/controllers',
    models: rootPath + '/models',
    validators: rootPath + '/validators'
  }
};

module.exports = config;
