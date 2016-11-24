import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
//import 'rxjs/Rx';


@Component({
  selector: 'app-ordercount',
  templateUrl: './ordercount.component.html',
  styleUrls: ['./ordercount.component.css']
})
export class OrdercountComponent implements OnInit {

  countJson: any;

  constructor(http: Http) {
    http.get('http://localhost:3004/db')
      .map(response => response.json())
      .subscribe(result => this.countJson =result);
  }

  ngOnInit() {
  }

}
