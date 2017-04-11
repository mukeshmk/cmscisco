import { Component, OnInit } from '@angular/core';
import {LoginService, User} from "./login.service";
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user : FormGroup;

  constructor(
              private _route : Router,
              private _fb : FormBuilder,
              private _loginService : LoginService
  ) {

    console.log(1);
    this.user = this._fb.group({
      loginName: ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{5,40}$/)]],
      password : ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{5,20}$/)]]
    });
  }

  login() {
    // console.log(this.portal);
    // this.loginGuard.sendValue(this.user,this.portal);
    // if(this.portal === 'blis'){
    //   this._route.navigate(['/blis']);
    // }
    // if(this.portal === 'cms'){
    //   this._route.navigate(['/cms']);
    // }

      /****
       *
       * 1. Validate the form
       * 2.
       * 4. Saves the user details locally and redirects to /
       */
      console.log(this.user);
      if(
        this.user.valid &&
        this._loginService.login(this.user.value.loginName, this.user.value.password)
      ){
        this._route.navigate(["/"]);
      }
  }

  ngOnInit() {

  }

}
