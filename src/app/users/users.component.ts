import { Component, OnInit } from '@angular/core';
import { UserService, User } from './user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User>;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.users = this._userService.getUsers()
    console.log(this.users)
  }

  
}
