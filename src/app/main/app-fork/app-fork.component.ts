import { Component, OnInit } from '@angular/core';
import {MainService} from "../main.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-fork',
  templateUrl: './app-fork.component.html',
  styleUrls: ['./app-fork.component.css']
})
export class AppForkComponent implements OnInit {

  private privilege;

  constructor(
    private _mainService : MainService,
    private _router : Router
  ) {

    /*
    Get the user data, set the privilege to the role
    according to the role, show either BLiS or CMS
     */
    let data = this._mainService.getUserData();
    if(data != undefined) {
      this.privilege = data.role;
      console.log(this.privilege);
    }else{
      this._router.navigate(["/404"]);
    }

    //console.log(blisRoute.concat(cmsRoute));

  }

  ngOnInit() {
  }

}
