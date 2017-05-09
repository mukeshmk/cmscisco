import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginService} from "./login.service";

@Injectable()
export class GuestGuard implements CanActivate {

  constructor(
    private _loginService: LoginService,
    private _router : Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {



    // If the user is not logged in redirect him to "/login",
    // else he is allowed to navigate to this page
    // console.log("Guest Guard");
    if(!this._loginService.isLoggedIn()){
      this._router.navigate(["/login"]);
    }else{
      return true;
    }

  }
}
