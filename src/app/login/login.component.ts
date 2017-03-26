import { Component, OnInit } from '@angular/core';
import {LoginService, User} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]

})
export class LoginComponent implements OnInit {
  public user = new User('','');
  public errorMsg = '';

  constructor(private _service: LoginService) {
  }
  login() {
    if (!this._service.login(this.user)) {
      this.errorMsg = 'Failed to login';
    }
  }

  ngOnInit() {
  }

}
