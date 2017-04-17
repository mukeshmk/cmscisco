import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginService} from "./login.service";

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(
    private _loginService: LoginService,
    private _router : Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // If the user is logged in redirect him to "/",
    // else he is allowed to navigate to this page
    alert();
    if(this._loginService.isLoggedIn()){
      this._router.navigate(["/"]);
    }else{
      return true;
    }

  }
}
