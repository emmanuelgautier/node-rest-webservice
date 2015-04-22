'use strict';

var config = require('../config/config'),
    authors = require(config.paths.controllers + '/authors');

var routes = [{
    method: 'GET',
    path: '/authors/',
    handler: authors.list
  }, {
    method: 'POST',
    path: '/authors/',
    handler: authors.create
  }, {
    method: 'GET',
    path: '/authors/{author}',
    handler: authors.get
  }, {
    method: 'PUT',
    path: '/authors/{author}',
    handler: authors.update
  }, {
    method: 'DELETE',
    path: '/authors/{author}',
    handler: authors.delete
  }
];

module.exports = routes;
