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
  paginatedRoles;
  currentPage;
  constructor(private _rolesService : RolesService) {

    this.paginatedRoles = [];
    this.currentPage = 0;

  }

  ngOnInit() {

    this.rolesData = this._rolesService.getRoles();
    let tempData = [];
    for(var i=0;i<this.rolesData.length; i++){
      tempData.push(this.rolesData[i]);
    }
    for(; tempData.length != 0 ; ){
      if(tempData.length - 1 >= 0) {
        this.paginatedRoles.push(tempData.splice(0, 1));
      }else{
        this.paginatedRoles.push(tempData.splice(0));
      }
    }
    console.log(this.paginatedRoles);
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

  changePage(index){
    this.currentPage = index;
  }

}
