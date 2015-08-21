export default class AbstractValidator {
    isValid() {
        throw new Error('Function "isValid" should be reloaded for ' + this.name);
    }
};
