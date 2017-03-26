import { Injectable } from '@angular/core';
import {ProfileData} from "./profile";

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
    var x = ProfileData.findIndex((profile) => {
      return profile.login == data.login;
    });
    if(x < 0){
      return -1;
    }
    ProfileData[x] = data;
    return 1;
  }


}
