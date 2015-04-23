'use strict';

var Boom = require('Boom'),
    Joi = require('joi');

var db = require('../config/db');

exports.list = function(request, reply) {
  db.Author.findAll({ where: request.query }).then(function(authors) {
    reply(authors);
  }).catch(function(err) {
    reply(Boom.badImplementation());
  });
};

exports.get = function(request, reply) {
  db.Author.find(request.params.author).then(function(author) {
    if(!author) {
      return reply(Boom.notFound());
    }

    reply(author);
  }).catch(function(err) {
    reply(Boom.badImplementation());
  });
};

exports.create = function(request, reply) {
  var author = request.payload;

  db.Author.create(author).then(function(author) {
    reply(author).code(201);
  }).catch(function(err) {
    reply(Boom.badImplementation());
  });
};

exports.update = function(request, reply) {
  var author = request.payload;

  db.Author.update(author, { where: { id: request.params.author } }).then(function(author) {
    if(!author[0]) {
      return reply(Boom.notFound());
    }

    reply(author);
  }).catch(function(err) {
    reply(Boom.badImplementation());
  });
};

exports.delete = function(request, reply) {
  db.Author.destroy({ where: { id: request.params.author } }).then(function(author) {
    if(!author) {
      return reply(Boom.notFound());
    }

    reply().code(204);
  }).catch(function(err) {
    reply(Boom.badImplementation());
  });
};
