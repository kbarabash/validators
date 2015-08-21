import AbstractValidator from '../core/AbstractValidator';

export default class Email extends AbstractValidator {
    constructor() {
        super();
        this.name = 'EmailValidator';
    }
    isValid(str) {
        return false
    }
};
