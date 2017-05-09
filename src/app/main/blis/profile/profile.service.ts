import { Injectable } from '@angular/core';
import {ProfileData} from "./profile";
import {UsersData} from "../users/users";


@Injectable()
export class ProfileService {

  constructor() { }

  getProfileByLogin(login){
    return ProfileData.find((profile) => {
      return profile.login == login;
    });
  }

  saveProfile(data){
    // console.log(data);
    // var x = UsersData.findIndex((profile) => {
    //   return profile.login == data.login;
    // });
    // if(x < 0){
    //   return -1;
    // }
    // UsersData[x] = data;
    // localStorage.setItem('userData', JSON.stringify(data));


    return 1;
  }
}
