'use strict';

var Joi = require('joi');

var config = require('../config/config'),

    AuthorValidator = require('../config/validator').Author,

    authors = require(config.paths.controllers + '/authors');

var routes = [{
    method: 'GET',
    path: '/authors/',
    handler: authors.list,
    config: {
      auth: 'bearer',
      validate: {
        query: AuthorValidator.Schema
      }
    }
  }, {
    method: 'POST',
    path: '/authors/',
    handler: authors.create,
    config: {
      auth: 'bearer',
      validate: {
        payload: AuthorValidator.Required
      }
    }
  }, {
    method: 'GET',
    path: '/authors/{author}',
    handler: authors.get,
    config: {
      auth: 'bearer',
      validate: {
        params: {
          author: Joi.number().integer().min(1)
        }
      }
    }
  }, {
    method: 'PUT',
    path: '/authors/{author}',
    handler: authors.update,
    config: {
      auth: 'bearer',
      validate: {
        params: {
          author: Joi.number().integer().min(1)
        },
        payload: AuthorValidator.Required
      }
    }
  }, {
    method: 'DELETE',
    path: '/authors/{author}',
    handler: authors.delete,
    config: {
      auth: 'bearer',
      validate: {
        params: {
          author: Joi.number().integer().min(1)
        }
      }
    }
  }
];

module.exports = routes;
