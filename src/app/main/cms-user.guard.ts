import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginService} from "../login/login.service";

@Injectable()
export class CmsUserGuard implements CanActivate {

  constructor(
    private _loginService: LoginService,
    private _router : Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this._loginService.isLoggedIn()){

      }
      return true;
  }
}
