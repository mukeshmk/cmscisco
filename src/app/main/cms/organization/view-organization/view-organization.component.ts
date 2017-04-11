import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import {organization} from "../oragnization.interface";
import {organizationService} from "../organization.service";


@Component({
  selector: 'app-view-organization',
  templateUrl: './view-organization.component.html',
  styleUrls: ['./view-organization.component.css'],
  providers : [organizationService]
})

export class ViewOrganizationComponent implements OnInit {

  orgData : organization[];
  sortField;
  sameSortField;
  selectedRow;

  constructor(private _orgService : organizationService) { }

  ngOnInit() {

    this.orgData = this._orgService.getOrg();
    this.sortField = undefined;
    this.sameSortField = 0;
    this.selectedRow = {};

  }
  sortData(fieldName){

    if(fieldName == this.sortField){
      this.sameSortField++;

    }else{
      this.sameSortField = 0;

    }
    this.orgData.sort((a,b) => {
      if(a[fieldName] > b[fieldName]){
        return this.sameSortField % 2 == 0 ? 1 : -1;
      }else if(a[fieldName] < b[fieldName]){
        return this.sameSortField % 2 == 0 ? -1 : 1;
      }
      return 0;
    });
    this.sortField = fieldName;
  }

  clickRow(data){
    this.selectedRow = data;
  }
}
