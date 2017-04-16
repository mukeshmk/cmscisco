import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login/login.service";
import {MainService} from "./main.service";
import {Router} from "@angular/router";
import {blisRoute} from "./blis/blis.routing";
import {cmsRoute} from "./cms/cms.routing";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers : [LoginService]
})
export class MainComponent implements OnInit {

  // private privilege;
  data;

  constructor(
    private _mainService : MainService,
    private _loginService : LoginService,
    private _router : Router
  ) {

    /* 1. Inject the service
        2. Call the is logged in function
        3. if logged in, check whats his permission and set it
        4. else redirect to login
        5. Display respective view and menu
     */
    this.data = this._mainService.getUserData();

    // console.log(data);
    // if(data != undefined) {
    //   this.privilege = data.role;
    //   console.log(this.privilege);
    // }else{
    //   //this._router.navigate(["/404"]);
    // }

    //console.log(blisRoute.concat(cmsRoute));

  }

  ngOnInit() {
  }

  logout(){
    this._loginService.logout();
    this._router.navigate(["/login"]);
  }

}
