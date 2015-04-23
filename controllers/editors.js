'use strict';

var Boom = require('Boom'),
    Joi = require('joi');

var db = require('../config/db');

exports.list = function(request, reply) {
  db.Editor.findAll({ where: request.query }).then(function(editors) {
    reply(editors);
  }).catch(function(err) {
    reply(Boom.badImplementation());
  });
};

exports.get = function(request, reply) {
  db.Editor.find(request.params.editor).then(function(editor) {
    if(!editor) {
      return reply(Boom.notFound());
    }

    reply(editor);
  }).catch(function(err) {
    reply(Boom.badImplementation());
  });
};

exports.create = function(request, reply) {
  var editor = request.payload;

  db.Editor.create(editor).then(function(editor) {
    reply(editor).code(201);
  }).catch(function(err) {
    reply(Boom.badImplementation());
  });
};

exports.update = function(request, reply) {
  var editor = request.payload;

  db.Editor.update(editor, { where: { id: request.params.editor } }).then(function(editor) {
    if(!editor[0]) {
      return reply(Boom.notFound());
    }

    reply(editor);
  }).catch(function(err) {
    reply(Boom.badImplementation());
  });
};

exports.delete = function(request, reply) {
  db.Editor.destroy({ where: { id: request.params.editor } }).then(function(editor) {
    if(!editor) {
      return reply(Boom.notFound());
    }

    reply().code(204);
  }).catch(function(err) {
    reply(Boom.badImplementation());
  });
};
