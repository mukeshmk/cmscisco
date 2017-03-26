import { Component, OnInit } from '@angular/core';
import {RolesService} from "../roles.service";
import {Role} from "../roles.interface";

@Component({
  selector: 'app-roles-view',
  templateUrl: './roles-view.component.html',
  styleUrls: ['./roles-view.component.css'],
  providers: [RolesService]
})
export class RolesViewComponent implements OnInit {

  rolesData : Role[];
  sortField;
  sameSortField;
  lastSelectedRow;

  constructor(private _rolesService : RolesService) { }

  ngOnInit() {

    this.rolesData = this._rolesService.getRoles();
    this.sortField = undefined;
    this.sameSortField = 0;
    this.lastSelectedRow = {};

  }

  sortData(fieldName){

    if(fieldName == this.sortField){
      this.sameSortField++;

    }else{
      this.sameSortField = 0;

    }
    this.rolesData.sort((a,b) => {
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
    this.lastSelectedRow = data;
  }

  inActivate(){
    this.lastSelectedRow.status = "Inactive";
    this._rolesService.saveRole(this.lastSelectedRow);
  }

}
