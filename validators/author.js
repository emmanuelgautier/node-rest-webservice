'use strict';

var Joi = require('joi');

var required = ['firstname', 'lastname', 'gender'],
    keys = {
      firstname: Joi.string().max(255),
      lastname: Joi.string().max(255),
      gender: Joi.valid(['0', '1']),
      birth_date: Joi.date(),
      death_date: Joi.date(),
      nationality: Joi.string().max(255),
      description: Joi.string()
    };

exports.required = required;
exports.keys = keys;
