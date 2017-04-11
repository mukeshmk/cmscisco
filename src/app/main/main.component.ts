import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers : [LoginService]
})
export class MainComponent implements OnInit {

  constructor(private _loginService : LoginService) {

    /* 1. Inject the service
        2. Call the is logged in function
        3. if logged in, check whats his permission and set it
        4. else redirect to login
        5. Display respective view and menu
     */



  }

  ngOnInit() {
  }

  logout(){
    this._loginService.logout();
  }

}
