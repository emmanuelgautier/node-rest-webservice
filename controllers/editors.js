'use strict';

var db = require(__dirname + '/../config/db');

exports.list = function(req, res, next) {
  db.Editor.findAll({ where: req.query }).success(function(editors) {
    res.send(editors);

    return next();
  }).error(function(err) {
    return next(err);
  });
};

exports.get = function(req, res, next) {
  db.Editor.find(req.params.id).success(function(editor) {
    res.send(editor);

    return next();
  }).error(function(err) {
    return next(err)
  });
};

exports.create = function(req, res, next) {
  db.Editor.create(req.body).success(function(editor) {
    res.send(201, editor);

    return next();
  }).error(function(err) {
    return next(err);
  });
};

exports.update = function(req, res, next) {
  db.Editor.update(req.body, { where: { id: req.params.id } }).success(function(editor) {
    res.send(editor);

    return next();
  }).error(function(err) {
    return next(err);
  });
};

exports.delete = function(req, res, next) {
  db.Editor.destroy({ where: { id: req.params.id } }).success(function(editor) {
    res.send(editor);

    return next();
  }).error(function(err) {
    return next(err);
  });
};
