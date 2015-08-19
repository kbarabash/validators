var expect = require('chai').expect;
var Email = require('../Email');

describe('Email', function() {
    it('init', function() {
        expect(Email).to.be.a('function');
    });
});
