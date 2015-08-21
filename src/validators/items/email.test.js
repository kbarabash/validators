var expect = require('chai').expect;
var Email = require('./email');

describe('Email', function() {
    it('init', function() {
        expect(Email).to.be.a('function');
        var email = new Email();
        expect(email).to.be.an('object');
        expect(email.isValid).to.be.a('function');
    });

    it('not valid', function() {
        var email = new Email();
    });
});
