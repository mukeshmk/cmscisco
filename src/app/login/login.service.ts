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
    /*
    For now we are using a static file which contains the dummy user data
    User service provides the data from the file,
    later we can plug the API calls instead of the file
     */

    let userData = this._userService.getUserByLoginAndPassword(loginName,password);
    /*
    If there is a user found add the following items to localstorage
    Currently we use something like 'logged_in' to signify logged in,
    but I will suggest that when plugging the API use JWT(JSONWebTokens)
    because thats the standard for Single Page Applications
     */
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
