'use strict';

var restify = require('restify'),
    db      = require(__dirname + '/../config/db');

exports.list = function(req, res, next) {
  db.Author.findAll({ where: req.query }).then(function(authors) {
    res.send(authors);

    return next();
  }).catch(function(err) {
    return next(new restify.InternalError(err.message));
  });
};

exports.get = function(req, res, next) {
  db.Author.find(req.params.id).then(function(author) {
    if(!author)
      return next(new restify.ResourceNotFoundError("Author " + req.params.id + " is not found"));

    res.send(author);

    return next();
  }).catch(function(err) {
    return next(new restify.InternalError(err.message));
  });
};

exports.create = function(req, res, next) {
  db.Author.create(req.body).then(function(author) {
    res.send(201, author);

    return next();
  }).catch(function(err) {
    if(err.name === 'SequelizeValidationError')
      return next(new restify.InvalidArgumentError(err.message));

    return next(new restify.InternalError(err.message));
  });
};

exports.update = function(req, res, next) {
  db.Author.update(req.body, { where: { id: req.params.id } }).then(function(updated) {
    if(!updated[0])
      return next(new restify.ResourceNotFoundError("Author " + req.params.id + " is not found"));

    return next();
  }).catch(function(err) {
    if(err.name === 'SequelizeValidationError')
      return next(new restify.InvalidArgumentError(err.message));

    return next(new restify.InternalError(err.message));
  });
};

exports.delete = function(req, res, next) {
  db.Author.destroy({ where: { id: req.params.id } }).then(function(author) {
    if(!author)
      return next(new restify.ResourceNotFoundError("Author " + req.params.id + " is not found"));

    res.send(author);

    return next();
  }).catch(function(err) {
    return next(new restify.InternalError(err.message));
  });
};
