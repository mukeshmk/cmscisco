import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [LoginService]

})
export class DashboardComponent implements OnInit {
  constructor(
    private _service:LoginService,private _router: Router){}

  ngOnInit(){
    if(!this._service.checkCredentials()){
      this._router.navigate(['login']);
    }
    else{}
  }

  logout() {
    this._service.logout();
  }
}
