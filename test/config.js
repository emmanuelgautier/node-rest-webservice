'use strict';

var Lab = require('lab'),
    Code = require('code'),

    config = require('../config/config');

var lab = exports.lab = Lab.script();

lab.experiment('config', function() {
  lab.test('it gets config data', function(done) {

    Code.expect(config).to.be.an.object();

    done();
  });
});
