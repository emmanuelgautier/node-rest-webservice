'use strict';

var fs = require('fs'),
    path = require('path'),

    _ = require('lodash'),

    Joi = require('joi'),

    config    = require(__dirname + '/../config/config'),
    validators = {};


fs.readdirSync(config.paths.validators)
  .filter(function(file) {
    return (file.indexOf('.') !== 0);
  })
  .forEach(function(file) {
    var filename = path.basename(file, '.js');

    var validator = require(path.join(config.paths.validators, filename)),

        name = _.startCase(filename),

        keys = validator.keys,
        required = validator.required;

      validators[name] = {};

      validators[name].Schema = Joi.object().keys(keys);

      for(var key in keys) {
        if(_.contains(required, key)) {
          keys[key] = keys[key].required();
        } else {
          keys[key] = keys[key].optional();
        }
      }

      validators[name].Required = Joi.object().keys(keys);
  });

module.exports = validators;

