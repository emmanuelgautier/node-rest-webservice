'use strict';

var restify = require('restify'),
    db      = require(__dirname + '/../config/db');

exports.listByAuthor = function(req, res, next) {
  req.query.author = req.params.id;

  return exports.list(req, res, next);
};

exports.listByEditor = function(req, res, next) {
  req.query.editor = req.params.id;

  return exports.list(req, res, next);
};

exports.list = function(req, res, next) {
  db.Book.findAll({ where: req.query }).success(function(books) {
    res.send(books);

    return next();
  }).error(function(err) {
    return next(new restify.InternalError(err.message));
  });
};

exports.get = function(req, res, next) {
  db.Book.find(req.params.id).success(function(book) {
    if(!book)
      return next(new restify.ResourceNotFoundError("Book " + req.params.id + " is not found"));

    res.send(book);

    return next();
  }).error(function(err) {
    return next(new restify.InternalError(err.message));
  });
};

exports.create = function(req, res, next) {
  db.Book.create(req.body).success(function(book) {
    res.send(201, book);

    return next();
  }).error(function(err) {
    if(err.name === 'SequelizeValidationError')
      return next(new restify.InvalidArgumentError(err.message));

    return next(new restify.InternalError(err.message));
  });
};

exports.update = function(req, res, next) {
  db.Book.update(req.body, { where: { id: req.params.id } }, { returning: true }).success(function(updated) {
    if(!updated[0])
      return next(new restify.ResourceNotFoundError("Book " + req.params.id + " is not found"));

    return next();
  }).error(function(err) {
    if(err.name === 'SequelizeValidationError')
      return next(new restify.InvalidArgumentError(err.message));

    return next(new restify.InternalError(err.message));
  });
};

exports.delete = function(req, res, next) {
  db.Book.destroy({ where: { id: req.params.id } }).success(function(book) {
    if(!book)
      return next(new restify.ResourceNotFoundError("Book " + req.params.id + " is not found"));

    res.send(book);

    return next();
  }).error(function(err) {
    return next(new restify.InternalError(err.message));
  });
};
