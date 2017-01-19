
import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-ordercount',
  templateUrl: './ordercount.component.html',
  styleUrls: ['./ordercount.component.css']
})
export class OrdercountComponent implements OnInit {

 // public countJson: any[];
 // public resultCount: any[];

  //generateArray(obj){
  //  return Object.keys(obj).map( (key) => {return obj[key]});
 // }

  constructor() {
  //  console.log("json-server called");
  //  http.get('http://localhost:3004/users')
  //    .map(response => response.json())
  //    .subscribe(result => this.countJson =result);
  }

  ngOnInit() {
  }

}

