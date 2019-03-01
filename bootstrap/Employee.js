export default class Employee {
    constructor(name, email, birthday) {
        this._name = name.toUpperCase();
        this._email = email;
        this._birthday = birthday;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get birthday() {
        return this._birthday;
    }

    // returns employee age
    getAge() {
        let oneDay = 24 * 60 * 60 * 1000;
        let oneYear = oneDay * 365;
        let differenceMs = Math.abs(new Date() - this._birthday);
        return Math.round(differenceMs / oneYear);
    }
}