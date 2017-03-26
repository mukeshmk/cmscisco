import { Injectable } from '@angular/core';
import {TeamsData} from "./teams";

@Injectable()
export class TeamsService {



  constructor() { }

  getTeams(){

    return TeamsData;

  }

  getTeamByID(id){
    return TeamsData.find((team) => {
      return team.id == id;
    });
  }

  saveTeam(data){
    // console.log(data);
    var x = TeamsData.findIndex((team) => {
      return team.id == data.id;
    });
    if(x < 0){
      return -1;
    }
    TeamsData[x] = data;
    return 1;

  }
}
