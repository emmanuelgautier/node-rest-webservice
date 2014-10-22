'use strict';

var authors = require('./controllers/authors'),
    books   = require('./controllers/books'),
    editors = require('./controllers/editors');

module.exports = function(server) {
  server.get('/authors', authors.list);
  server.post('/authors', authors.create);
  server.get('/authors/:id', authors.get);
  server.put('/authors/:id', authors.update);
  server.del('/authors/:id', authors.delete);
};