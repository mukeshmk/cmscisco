import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
export class User {
  constructor(
    public username: string,
    public password: string
    ) { }
}



var blisusers = [
  new User('admin1','admin1'),
  new User('admin2','admin2'),
];

var cmsusers = [
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

  login(user,portal){

    if(portal == 'blis'){
      var authenticatedUser = blisusers.find(u => u.username === user.username);
      if (authenticatedUser && authenticatedUser.password === user.password){
        localStorage.setItem("user", JSON.stringify(authenticatedUser));
        this._router.navigate(['']);
        return true;
      }
      return false;
    }
    else if(portal == 'cms'){
      var authenticatedUser = cmsusers.find(u => u.username === user.username);
      if (authenticatedUser && authenticatedUser.password === user.password){
        localStorage.setItem("user", JSON.stringify(authenticatedUser));
        this._router.navigate(['']);
        return true;
      }
      return false;
    }


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
