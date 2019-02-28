export default class Employee {
    constructor(name, email, birthday) {
        this._name = name.toUppercase();
        this._email = email;
        this._birthday = birthday;
    }

    // returns employee age
    getAge() {}
}