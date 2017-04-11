import { Injectable } from '@angular/core';
import {UsersData} from "./users";
import {User} from "./users.interface";

@Injectable()
export class UsersService{
userdata: User;
  constructor() { }

  getUsers(){

    return UsersData;

  }

  getUserByLoginAndPassword(loginName, password){
    return UsersData.find((user) => {
      return user.loginName == loginName && user.password == password;
    });
  }

  getUserByOnlineName(onlineName){
    return UsersData.find((user) => {
      return user.onlineName == onlineName;
    });
  }

  saveUser(data)
  {
    var x = UsersData.findIndex((user) => {
      return user.onlineName == data.onlineName;
    });
    if(x < 0){
      return -1;
    }
    UsersData[x] = data;
    return 1;
  }

  addUser(data)
  {
    this.userdata=data;
    var prevLen=UsersData.length;
    var curLen= UsersData.push(this.userdata);
    console.log(data);
    console.log(this.userdata);
    console.log(curLen);
    console.log(prevLen);
    console.log(UsersData);
    return 1;
  }
}
