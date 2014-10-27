'use strict';

var restify = require('restify'),
    db      = require(__dirname + '/../config/db');

exports.list = function(req, res, next) {
  db.Author.findAll({ where: req.query }).success(function(authors) {
    res.send(authors);

    return next();
  }).error(function(err) {
    return next(new restify.InternalError(err.message));
  });
};

exports.get = function(req, res, next) {
  db.Author.find(req.params.id).success(function(author) {
    if(!author)
      return next(new restify.ResourceNotFoundError("Author " + req.params.id + " is not found"));

    res.send(author);

    return next();
  }).error(function(err) {
    return next(new restify.InternalError(err.message));
  });
};

exports.create = function(req, res, next) {
  db.Author.create(req.body).success(function(author) {
    res.send(201, author);

    return next();
  }).error(function(err) {
    if(err.name === 'SequelizeValidationError')
      return next(new restify.InvalidArgumentError(err.message));

    return next(new restify.InternalError(err.message));
  });
};

exports.update = function(req, res, next) {
  db.Author.update(req.body, { where: { id: req.params.id } }).success(function(updated) {
    if(!updated[0])
      return next(new restify.ResourceNotFoundError("Author " + req.params.id + " is not found"));

    return next();
  }).error(function(err) {
    if(err.name === 'SequelizeValidationError')
      return next(new restify.InvalidArgumentError(err.message));

    return next(new restify.InternalError(err.message));
  });
};

exports.delete = function(req, res, next) {
  db.Author.destroy({ where: { id: req.params.id } }).success(function(author) {
    if(!author)
      return next(new restify.ResourceNotFoundError("Author " + req.params.id + " is not found"));

    res.send(author);

    return next();
  }).error(function(err) {
    return next(new restify.InternalError(err.message));
  });
};
