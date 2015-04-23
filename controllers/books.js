'use strict';

var Boom = require('Boom'),
    Joi = require('joi');

var db = require('../config/db');

exports.listByAuthor = function(request, reply) {
  request.query.author = request.params.author;

  return exports.list(request, reply);
};

exports.listByEditor = function(request, reply) {
  request.query.editor = request.params.editor;

  return exports.list(request, reply);
};

exports.list = function(request, reply) {
  db.Book.findAll({ where: request.query }).then(function(books) {
    reply(books);
  }).catch(function(err) {
    reply(Boom.badImplementation());
  });
};

exports.get = function(request, reply) {
  db.Book.find(request.params.book).then(function(book) {
    if(!book) {
      return reply(Boom.notFound());
    }

    reply(book);
  }).catch(function(err) {
    reply(Boom.badImplementation());
  });
};

exports.create = function(request, reply) {
  var book = request.payload;

  db.Book.create(book).then(function(book) {
    reply(book).code(201);
  }).catch(function(err) {
    reply(Boom.badImplementation());
  });
};

exports.update = function(request, reply) {
  var book = request.payload;

  db.Book.update(book, { where: { id: request.params.book } }, { returning: true }).then(function(book) {
    if(!book[0]) {
      return reply(Boom.notFound());
    }

    reply().code(204);
  }).catch(function(err) {
    reply(Boom.badImplementation());
  });
};

exports.delete = function(request, reply) {
  db.Book.destroy({ where: { id: request.params.book } }).then(function(book) {
    if(!book) {
      return reply(Boom.notFound());
    }

    reply().code(204);
  }).catch(function(err) {
    reply(Boom.badImplementation());
  });
};
