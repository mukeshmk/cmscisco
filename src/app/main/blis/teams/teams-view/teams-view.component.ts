import { Component, OnInit } from '@angular/core';
import {TeamsService} from "../teams.service";
import {Team} from "../teams.interface";

@Component({
  selector: 'app-teams-view',
  templateUrl: './teams-view.component.html',
  styleUrls: ['./teams-view.component.css'],
  providers : [TeamsService]
})
export class TeamsViewComponent implements OnInit {

  teamsData : Team[];
  sortField;
  sameSortField;
  lastSelectedRow;
  paginatedTeams;
  currentPage;

  constructor(private _teamsService : TeamsService) {

    this.paginatedTeams = [];
    this.currentPage = 0;

  }

  ngOnInit() {

    this.teamsData = this._teamsService.getTeams();

    let tempData = [];
    for(var i=0;i<this.teamsData.length; i++){
      tempData.push(this.teamsData[i]);
    }
    for(; tempData.length != 0 ; ){
      if(tempData.length - 1 >= 0) {
        this.paginatedTeams.push(tempData.splice(0, 1));
      }else{
        this.paginatedTeams.push(tempData.splice(0));
      }
    }
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
    this.teamsData.sort((a,b) => {
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
    this._teamsService.saveTeam(this.lastSelectedRow);
  }

  changePage(index){
    this.currentPage = index;
  }

}
