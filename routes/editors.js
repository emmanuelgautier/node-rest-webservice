'use strict';

var config = require('../config/config'),
    editors = require(config.paths.controllers + '/editors');

var routes = [{
    method: 'GET',
    path: '/editors/',
    handler: editors.list
  }, {
    method: 'POST',
    path: '/editors/',
    handler: editors.create
  }, {
    method: 'GET',
    path: '/editors/{editor}',
    handler: editors.get
  }, {
    method: 'PUT',
    path: '/editors/{editor}',
    handler: editors.update
  }, {
    method: 'DELETE',
    path: '/editors/{editor}',
    handler: editors.delete
  }
];

module.exports = routes;
