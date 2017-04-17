import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../main/blis/users/users.service";





@Injectable()
export class LoginService {

  private loggedIn = false;

  constructor(private _router: Router, private _userService : UsersService) {

    this.loggedIn = !!localStorage.getItem('logged_in');

  }
  logout() {
    this.loggedIn = false;
    localStorage.removeItem("logged_in");
    localStorage.removeItem("userData");
  }

  login(loginName : String, password : String){
    // if(localStorage.getItem("user") === null){
    //   return false;
    // }
    // else {
    //   return true;
    // }
    let userData = this._userService.getUserByLoginAndPassword(loginName,password);
    console.log(userData);
    if(userData != undefined){
      this.loggedIn = true;
      localStorage.setItem('logged_in', "true");
      localStorage.setItem('userData', JSON.stringify(userData));
      return true;
    }else{
      return false;
    }
  }

  isLoggedIn(){
    return this.loggedIn;
  }
}
