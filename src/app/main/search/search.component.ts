import { Component, OnInit } from '@angular/core';
import {timeout} from "rxjs/operator/timeout";


@Component({
  selector: 'app-search',
  templateUrl:'./search.component.html'
      ,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  options;
  toggled;


  constructor(){
    this.options = [
      'Organization Name',
      'User Name',
      'Roles'
    ]
  }

  // displayOptions(){
  //   console.log('displayOptions');
  //   this.toggled = true;
  //   setTimeout(() => {
  //     this.toggled = false;
  //   }, 10000);
  // }

  optionClick(event){
    console.log(event);
    if(this.toggled){
      if(event > 0 ){
        let temp = this.options.pop(event);
        this.options.unshift(temp);
      }
      this.toggled = false;
    }else{
      this.toggled = true;
    }
  }

  ngOnInit() {
  }

}
