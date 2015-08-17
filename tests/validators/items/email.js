var expect = require('chai').expect;
var vldtrs = require('../../../dist/validators');
var EmailValidator = new vldtrs.VL.getValidators().email;

describe('Email', function() {
    it('init', function() {
        expect(EmailValidator).to.be.a('function');
    });
});
