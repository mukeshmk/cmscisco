import { Injectable } from '@angular/core';

@Injectable()
export class MainService {


  constructor() {



  }

  getUserData(){
    return JSON.parse(localStorage.getItem('userData'));
  }

}
