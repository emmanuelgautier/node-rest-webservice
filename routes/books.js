'use strict';

var Joi = require('joi');

var config = require('../config/config'),

    BookValidator = require('../config/validator').Book,

    books = require(config.paths.controllers + '/books');

var routes = [{
    method: 'GET',
    path: '/books/',
    handler: books.list,
    config: {
      auth: 'bearer',
      validate: {
        query: BookValidator.Schema
      }
    }
  }, {
    method: 'POST',
    path: '/books/',
    handler: books.create,
    config: {
      auth: 'bearer',
      validate: {
        payload: BookValidator.Required
      }
    }
  }, {
    method: 'GET',
    path: '/books/{book}',
    handler: books.get,
    config: {
      auth: 'bearer',
      validate: {
        params: {
          books: Joi.number().integer().min(1)
        }
      }
    }
  }, {
    method: 'PUT',
    path: '/books/{book}',
    handler: books.update,
    config: {
      auth: 'bearer',
      validate: {
        params: {
          books: Joi.number().integer().min(1)
        },
        payload: BookValidator.Required
      }
    }
  }, {
    method: 'DELETE',
    path: '/books/{book}',
    handler: books.delete,
    config: {
      auth: 'bearer',
      validate: {
        params: {
          books: Joi.number().integer().min(1)
        }
      }
    }
  }, {
    method: 'GET',
    path: '/authors/{author}/books',
    handler: books.listByAuthor,
    config: {
      auth: 'bearer',
      validate: {
        params: {
          author: Joi.number().integer().min(1)
        }
      }
    }
  }, {
    method: 'GET',
    path: '/editors/{editor}/books',
    handler: books.listByEditor,
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
