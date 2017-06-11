import { Injectable } from '@angular/core';

@Injectable()
class UserService {
  private _users: Array<User> = [
    new User('Marsha'),
    new User('Brandon'),
    new User('Lydia'),
    new User('Samuel'),
  ];
  constructor() { }

  getUsers() {
    // Ordinarily, a request would be made via the HTTP module to asyncronously get the users
    return this._users;
  }

}


class User {
  name: string;
  createdAt: Date;
  constructor(name: string) {
    this.name = name;
    this.createdAt = new Date();
  }
}

export {UserService, User}
