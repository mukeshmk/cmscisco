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

    /* 1. Inject the service
     2. Call the is logged in function
     3. if logged in, check whats his permission and set it
     4. else redirect to login
     5. Display respective view and menu
     */
    let data = this._mainService.getUserData();
    console.log(data);
    if(data != undefined) {
      this.privilege = data.role;
      console.log(this.privilege);
    }else{
      //this._router.navigate(["/404"]);
    }

    //console.log(blisRoute.concat(cmsRoute));

  }

  ngOnInit() {
  }

}
