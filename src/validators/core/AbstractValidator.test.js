var expect = require('chai').expect;
var AbstractValidator = require('./../core/AbstractValidator');

describe('AbstractValidator', function() {
    it('init', function() {
        expect(AbstractValidator).to.be.a('function');

        var abstrValidator = new AbstractValidator();
        expect(abstrValidator).to.be.an('object');
        expect(abstrValidator.isValid).to.be.a('function');
    });

    it('isValid', function() {
        var abstrValidator = new AbstractValidator();
        expect(abstrValidator.isValid).throw(Error);
    });
});
