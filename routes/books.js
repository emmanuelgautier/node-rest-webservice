'use strict';

var config = require('../config/config'),
    books = require(config.paths.controllers + '/books');

var routes = [{
  method: 'GET',
  path: '/books/',
  handler: books.list
}, {
  method: 'POST',
  path: '/books/',
  handler: books.create
}, {
  method: 'GET',
  path: '/books/{book}',
  handler: books.get
}, {
  method: 'PUT',
  path: '/books/{book}',
  handler: books.update
}, {
  method: 'DELETE',
  path: '/books/{book}',
  handler: books.delete
}, {
  method: 'GET',
  path: '/authors/{author}/books',
  handler: books.listByAuthor
}, {
  method: 'GET',
  path: '/editors/{editor}/books',
  handler: books.listByEditor
}];

module.exports = routes;
