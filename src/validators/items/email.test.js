var expect = require('chai').expect;
var Email = require('./email');
var AbstractValidator = require('./../core/AbstractValidator');

describe('Email', function() {
    it('init', function() {
        expect(Email).to.be.a('function');
        var email = new Email();
        expect(email).to.be.an('object');
        expect(email).to.be.an.instanceof(AbstractValidator);
        expect(email.isValid).to.be.a('function');
    });

    it('not valid', function() {
        var email = new Email();
        expect(email.isValid('123123')).to.be.false;
        expect(email.isValid('email@gmail')).to.be.false;
    });

    it('valid', function() {
        var email = new Email();
        expect(email.isValid('123123@gmail.com')).to.be.true;
        expect(email.isValid('tetetet123123@gmail.net')).to.be.true;
    });
});
