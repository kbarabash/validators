import AbstractValidator from '../core/AbstractValidator';

export default class Email extend AbstractValidator {
    constructor() {
        this.name = 'EmailValidator';
    }
};