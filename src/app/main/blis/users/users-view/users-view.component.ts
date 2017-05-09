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
  paginatedUsers;
  currentPage;

  constructor(private _usersService : UsersService) {

    this.paginatedUsers = [];
    this.currentPage = 0;

  }

  ngOnInit() {
    //Gets all the user data
    this.usersData = this._usersService.getUsers();
    /*
      Splits the data which is got from the server into
      arrays of 6 items to not overfill the container
     */
    let tempData = [];
    for(var i=0;i<this.usersData.length; i++){
      tempData.push(this.usersData[i]);
    }
    for(; tempData.length != 0 ; ){
      if(tempData.length - 6 >= 0) {
        this.paginatedUsers.push(tempData.splice(0, 6));
      }else{
        this.paginatedUsers.push(tempData.splice(0));
      }
    }
    this.sortField = undefined;
    this.sameSortField = 0;
    this.selectedRow = {};

  }
  sortData(fieldName){
    /*
      If a field name is clicked, the data is sorted according to that column
     */
    if(fieldName == this.sortField){
      this.sameSortField++;

    }else{
      this.sameSortField = 0;
    }
    /*
      Tries to check if it already sorted and if it is then sorts it in the other direction
     */
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
    //Sets the data of the row clicked to the selectedRow
    this.selectedRow = data;
  }

  changePage(index){
    //Changes the page to the index sent
    this.currentPage = index;
  }

}
