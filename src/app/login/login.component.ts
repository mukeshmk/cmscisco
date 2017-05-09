import { Component, OnInit } from '@angular/core';
import {LoginService} from "./login.service";
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
    // User Login form
    this.user = this._fb.group({
      loginName: ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{5,40}$/)]],
      password : ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{5,20}$/)]]
    });
  }

  login() {

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
