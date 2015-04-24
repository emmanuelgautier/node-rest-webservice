'use strict';

var Joi = require('joi');

var required = ['name'],
    keys = {
      name: Joi.string().max(255)
    };

exports.required = required;
exports.keys = keys;
