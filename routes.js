'use strict';

var passport  = require('passport'),

    config    = require(__dirname + '/config/config'),

    authors   = require(config.controllers.path + '/authors'),
    books     = require(config.controllers.path + '/books'),
    editors   = require(config.controllers.path + '/editors'),

    oauth2    = require(config.controllers.path + '/oauth2');

module.exports = function(server) {

  server.get('/authors',            authors.list);
  server.post('/authors',           authors.create);
  server.get('/authors/:id',        authors.get);
  server.put('/authors/:id',        authors.update);
  server.del('/authors/:id',        authors.delete);

  server.get('/authors/:id/books',  books.listByAuthor);
  server.get('/editors/:id/books',  books.listByEditor);

  server.get('/books',              books.list);
  server.post('/books',             books.create);
  server.get('/books/:id',          books.get);
  server.put('/books/:id',          books.update);
  server.del('/books/:id',          books.delete);

  server.get('/editors',            editors.list);
  server.post('/editors',           editors.create);
  server.get('/editors/:id',        editors.get);
  server.put('/editors/:id',        editors.update);
  server.del('/editors/:id',        editors.delete);

};
