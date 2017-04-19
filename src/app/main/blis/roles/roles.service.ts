import { Injectable } from '@angular/core';
import {RolesData} from "./roles";

@Injectable()
export class RolesService {

  constructor() { }

  getRoles(){
    console.log(RolesData);

    return RolesData;

  }

  getRoleByID(id){
    //console.log(RolesData);

    return RolesData.find((role) => {
      alert(role);
      return role.id == id;
    });
  }

  saveRole(data){
    // console.log(data);
    var x = RolesData.findIndex((role) => {
      return role.id == data.id;
    });
    if(x < 0){
      return -1;
    }
    RolesData[x] = data;
    return 1;
  }

  newRole(data){
    console.log(data);
    RolesData.push(data);
    console.log(RolesData);
    return false;
  }
}
