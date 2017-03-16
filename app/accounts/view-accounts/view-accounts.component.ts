import { Component, OnInit } from '@angular/core';
import {viewAccount} from "./viewAccounts.interface";
import {viewAccountData} from "./viewAccounts.array";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-accounts',
  templateUrl: './view-accounts.component.html',
  styleUrls: ['./view-accounts.component.css']
})
export class ViewAccountsComponent implements OnInit {


  accountsData : viewAccount[];
  selectedRow;
  constructor(public router : Router) {

  }


  ngOnInit() {
    this.accountsData = viewAccountData;
    this.selectedRow = {};
  }

  clickRow(data){
    console.log(data);
    this.selectedRow = data;
    console.log(this.selectedRow.orgID);
    this.router.navigate(['/accounts/edit',this.selectedRow.orgID]);
  }
}
