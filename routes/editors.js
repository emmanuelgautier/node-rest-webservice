'use strict';

var Joi = require('joi');

var config = require('../config/config'),

    EditorValidator = require('../config/validator').Editor,

    editors = require(config.paths.controllers + '/editors');

var routes = [{
    method: 'GET',
    path: '/editors/',
    handler: editors.list,
    config: {
      auth: 'bearer',
      cache: {
        expiresIn: config.caching.expiresIn
      },
      validate: {
        query: EditorValidator.Schema
      }
    }
  }, {
    method: 'POST',
    path: '/editors/',
    handler: editors.create,
    config: {
      auth: 'bearer',
      validate: {
        payload: EditorValidator.Required
      }
    }
  }, {
    method: 'GET',
    path: '/editors/{editor}',
    handler: editors.get,
    config: {
      auth: 'bearer',
      cache: {
        expiresIn: config.caching.expiresIn
      },
      validate: {
        params: {
          editor: Joi.number().integer().min(1)
        }
      }
    }
  }, {
    method: 'PUT',
    path: '/editors/{editor}',
    handler: editors.update,
    config: {
      auth: 'bearer',
      validate: {
        params: {
          editor: Joi.number().integer().min(1)
        },
        payload: EditorValidator.Required
      }
    }
  }, {
    method: 'DELETE',
    path: '/editors/{editor}',
    handler: editors.delete,
    config: {
      auth: 'bearer',
      validate: {
        params: {
          editor: Joi.number().integer().min(1)
        }
      }
    }
  }
];

module.exports = routes;
