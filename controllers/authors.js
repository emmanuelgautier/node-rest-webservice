'use strict';

var db = require(__dirname + '/../config/db');

exports.list = function(req, res, next) {
  db.Author.findAll({ where: req.query }).success(function(authors) {
    res.send(authors);

    return next();
  }).error(function(err) {
    return next(err);
  });
};

exports.get = function(req, res, next) {
  db.Author.find(req.params.id).success(function(author) {
    res.send(201, author);

    return next();
  }).error(function(err) {
    return next(err);
  });
};

exports.create = function(req, res, next) {
  db.Author.create(req.body).success(function(author) {
    res.send(201, author);

    return next();
  }).error(function(err) {
    return next(err)
  });
};

exports.update = function(req, res, next) {
  db.Author.update(req.body, { where: { id: req.params.id } }).success(function(author) {
    res.send(author);

    return next();
  }).error(function(err) {
    return next(err);
  });
};

exports.delete = function(req, res, next) {
  db.Author.destroy({ where: { id: req.params.id } }).success(function(author) {
    res.send(author);

    return next();
  }).error(function(err) {
    return next(err);
  });
};
