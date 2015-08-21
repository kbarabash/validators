var expect = require('chai').expect;
var Email = require('./email');

describe('Email', function() {
    it('init', function() {
        expect(Email).to.be.a('function');
    });
});
