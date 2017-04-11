import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {User} from "../users.interface";

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css'],
  providers : [UsersService]

})
export class UsersViewComponent implements OnInit {

  usersData : User[];
  sortField;
  sameSortField;
  selectedRow;

  constructor(private _usersService : UsersService) { }

  ngOnInit() {

    this.usersData = this._usersService.getUsers();
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
    this.usersData.sort((a,b) => {
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
