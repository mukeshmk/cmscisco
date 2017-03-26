import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
export class User {
  constructor(
    public username: string,
    public password: string
    ) { }
}

export var blisusers = [
  new User('admin1','admin1'),
  new User('admin2','admin2'),
];

export var cmsusers = [
  new User('cms1','cms1'),
  new User('cms2','cms2')
];

@Injectable()
export class LoginService {

  constructor(private _router: Router) { }
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['login']);
  }

  checkCredentials(){
    if(localStorage.getItem("user") === null){
      return false;
    }
    else {
      return true;
    }
  }
}
