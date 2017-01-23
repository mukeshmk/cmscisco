import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {viewAccount} from "./viewAccounts.interface";
import {viewAccountData} from "./viewAccounts.array";
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accountsData : viewAccount[];
  selectedRow;
  id: number;
  constructor(private route : ActivatedRoute,public router : Router) {


    this.route.params.subscribe((params) => {
      this.id = params['id']});

    console.log(this.id);
  }


  ngOnInit() {
    this.accountsData = viewAccountData;
    this.selectedRow = {};
  }


  clickRow(data){
    console.log(data);
    this.selectedRow = data;
    if(this.id == 0) this.router.navigate(['/new',this.selectedRow.orgID]);
  }

}
