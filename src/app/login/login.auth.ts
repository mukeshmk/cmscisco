import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {LoginService} from "./login.service";

@Injectable({
  providers : [LoginService]
})
export default class loginAuthorization implements CanActivate {

    constructor(
      private _router: Router,
      private _loginService : LoginService
    ){

    }
    canActivate(){
        console.log('Login Guard called');

        // if(this.portal == 'blis'){
        //     var authenticatedUser =  blisusers.find(u => u.username === this.user.username);
        //     if (authenticatedUser && authenticatedUser.password === this.user.password){
        //         localStorage.setItem("user", JSON.stringify(authenticatedUser));
        //         return true;
        //     }
        //     alert('Login Denied!');
        //     return false;
        // }
        // else if(this.portal == 'cms'){
        //     var authenticatedUser = cmsusers.find(u => u.username === this.user.username);
        //     if (authenticatedUser && authenticatedUser.password === this.user.password){
        //         localStorage.setItem("user", JSON.stringify(authenticatedUser));
        //         return true;
        //     }
        //     alert('Login Denied!');
        //     return false;
        // }
        if(this._loginService.isLoggedIn()){
          return true;
        }else{
          this._router.navigate(["/login"]);
        }
    }

    // sendValue(user,portal) {
    //   this.user = user;
    //   this.portal = portal;
    // }
}
