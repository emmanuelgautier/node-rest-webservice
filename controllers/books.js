'use strict';

var db = require(__dirname + '/../config/db');

exports.listByAuthor = function(req, res, next) {
  
};

exports.listByEditor = function(req, res, next) {

};

exports.get = function(req, res, next) {
  db.Book.find(req.params.id).success(function(book) {
    res.send(book);

    return next();
  }).error(function(err) {
    return next(err);
  });
};

exports.create = function(req, res, next) {
  db.Book.create(req.body).success(function(book) {
    res.send(book);

    return next();
  }).error(function(err) {
    return next(err);
  });
};

exports.update = function(req, res, nex) {
  db.Book.update(req.body, { where: { id: req.params.id } }).success(function(book) {

  }).error(function(err) {
    return next(err);
  });
};

exports.delete = function(req, res, next) {
  db.Book.destroy({ where: { id: req.params.id } }).success(function(book) {
    res.send(book);

    return next();
  }).error(function(err) {
    return next(err);
  });
};
