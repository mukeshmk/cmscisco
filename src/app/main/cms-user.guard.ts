import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginService} from "../login/login.service";
import {MainService} from "./main.service";

@Injectable()
export class CmsUserGuard implements CanActivate {

  constructor(
    private _mainService : MainService,
    private _router : Router
  ){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let data = this._mainService.getUserData();
    console.log(data);
    if(data != undefined && data.role != 'sales') {
      return true;
    }else{
      this._router.navigate(["/404"]);
    }
  }
}
