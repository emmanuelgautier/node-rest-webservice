'use strict';

var restify = require('restify'),
    db      = require(__dirname + '/../config/db');

exports.list = function(req, res, next) {
  db.Editor.findAll({ where: req.query }).then(function(editors) {
    res.send(editors);

    return next();
  }).catch(function(err) {
    return next(new restify.InternalError(err.message));
  });
};

exports.get = function(req, res, next) {
  db.Editor.find(req.params.id).then(function(editor) {
    if(!editor)
      return next(new restify.ResourceNotFoundError("Editor " + req.params.id + " is not found"));

    res.send(editor);

    return next();
  }).catch(function(err) {
    return next(new restify.InternalError(err.message));
  });
};

exports.create = function(req, res, next) {
  db.Editor.create(req.body).then(function(editor) {
    res.send(201, editor);

    return next();
  }).catch(function(err) {
    if(err.name === 'SequelizeValidationError')
      return next(new restify.InvalidArgumentError(err.message));

    return next(new restify.InternalError(err.message));
  });
};

exports.update = function(req, res, next) {
  db.Editor.update(req.body, { where: { id: req.params.id } }).then(function(updated) {
    if(!updated[0])
      return next(new restify.ResourceNotFoundError("Editor " + req.params.id + " is not found"));

    return next();
  }).catch(function(err) {
    if(err.name === 'SequelizeValidationError')
      return next(new restify.InvalidArgumentError(err.message));

    return next(new restify.InternalError(err.message));
  });
};

exports.delete = function(req, res, next) {
  db.Editor.destroy({ where: { id: req.params.id } }).then(function(editor) {
    if(!editor)
      return next(new restify.ResourceNotFoundError("Editor " + req.params.id + " is not found"));

    res.send(editor);

    return next();
  }).catch(function(err) {
    return next(new restify.InternalError(err.message));
  });
};
