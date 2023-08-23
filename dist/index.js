"use strict";
class StudentRepository {
    constructor(name, email, address) {
        this._users = [];
        this._name = name;
        this.email = email;
        this.address = address !== null && address !== void 0 ? address : 'no address';
    }
    createUser(payload) {
        this._users.push(payload);
    }
    getUsers() {
        return this._users;
    }
    getUser(index) {
        return this._users[index];
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
}
const studentdb = new StudentRepository('ismailawa', 'ismailawa.aliyu@gmail.com');
studentdb.createUser({
    firstName: 'Student',
    lastName: 'Student',
    email: '',
    id: '44',
    password: 'password',
});
