import { Component, OnInit } from '@angular/core';
import {LoginService, User} from "./login.service";
import loginAuthorization from "./login.auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]

})
export class LoginComponent implements OnInit {
  public user = new User('','');
  public portal  = 'blis';

  constructor(private loginGuard: loginAuthorization, private _route : Router) {

  }
  login() {
    console.log(this.portal);
    this.loginGuard.sendValue(this.user,this.portal);
    if(this.portal === 'blis'){
      this._route.navigate(['/blis']);
    }
    if(this.portal === 'cms'){
      this._route.navigate(['/cms']);
    }
  }

  ngOnInit() {

  }

}
