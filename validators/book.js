'use strict';

var Joi = require('joi');

var required = ['title', 'isbn'],
    keys = {
      title: Joi.string().max(255),
      isbn: Joi.string().max(255),
      published_at: Joi.date(),
      number_pages: Joi.number().integer(),
      cover: Joi.string().max(255)
    };

exports.required = required;
exports.keys = keys;
