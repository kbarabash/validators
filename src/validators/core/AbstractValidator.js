export default class AbstractValidator {
    isValid() {
        console && console.log(this.name, ' isValid function should be reloaded');
        return true
    }
};
