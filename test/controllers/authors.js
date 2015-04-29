'use strict';

var Lab = require('lab'),
    Code = require('code');

var server = require('../../app');

var lab = exports.lab = Lab.script();

lab.experiment('Authors', function() {
  var expect = Code.expect;

  var authorizationHeader = {
    Authorization: 'bearer abcdef'
  };

  lab.test('it list users', function(done) {
    var options = {
      method: 'GET',
      url: '/authors/',
      headers: authorizationHeader
    };

    server.inject(options, function(response) {
      var result = response.result;

      expect(response.statusCode).to.equal(200);
      expect(result).to.be.an.array();
      expect(result).to.have.length(0);

      done();
    });
  });

  lab.test('it create a new user', function(done) {
    var options = {
      method: 'POST',
      url: '/authors/',
      headers: authorizationHeader,
      payload: {
        firstname: 'firstname',
        lastname: 'lastname',
        gender: '1'
      }
    };

    server.inject(options, function(response) {
      var result = response.result;

      expect(response.statusCode).to.equal(201);
      expect(result).to.be.an.object();
      expect(result.firstname).to.be.equal(options.payload.firstname);
      expect(result.lastname).to.be.equal(options.payload.lastname);
      expect(result.gender).to.be.equal(options.payload.gender);

      done();
    });
  });

  lab.test('it create a new user with error', function(done) {
    var options = {
      method: 'POST',
      url: '/authors/',
      headers: authorizationHeader
    };

    server.inject(options, function(response) {
      expect(response.statusCode).to.equal(400);

      done();
    });
  });
});
