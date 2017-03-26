import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
export class User {
  constructor(
    public username: string,
    public password: string) { }
}

var users = [
  new User('admin1','admin1'),
  new User('admin2','admin2')
];

@Injectable()
export class LoginService {

  constructor(private _router: Router) { }
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  login(user){
    var authenticatedUser = users.find(u => u.username === user.username);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      this._router.navigate(['']);
      return true;
    }
    return false;

  }

  checkCredentials(){
    if (localStorage.getItem("user") === null){
      return false;
    }
    else {
      return true;
    }
  }
}
