interface User {
  id: string;
  firstName: string;
  lastName: string;
  age?: number;
  email: string;
  password: string;
}

class StudentRepository {
  private _name: string;
  public email: string;
  public address: string;

  private _users: User[] = [];

  constructor(name: string, email: string, address?: string) {
    this._name = name;
    this.email = email;
    this.address = address ?? 'no address';
  }

  public createUser(payload: User): User | any {
    this._users.push(payload);
  }

  public getUsers(): User[] {
    return this._users;
  }

  public getUser(index: number): User {
    return this._users[index];
  }

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this._name = v;
  }
}

const studentdb = new StudentRepository(
  'ismailawa',
  'ismailawa.aliyu@gmail.com'
);

studentdb.createUser({
  firstName: 'Student',
  lastName: 'Student',
  email: '',
  id: '44',
  password: 'password',
});
