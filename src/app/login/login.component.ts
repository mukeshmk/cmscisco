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
  public portal  = 'blis';

  constructor(private _service: LoginService) {
  }
  login() {
    console.log(this.portal);
    if (!this._service.login(this.user,this.portal)) {
      this.errorMsg = 'Failed to login';
    }
  }

  ngOnInit() {
  }

}
