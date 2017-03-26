import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {ordercount} from "./ordercount.interface";
import {ordercountData} from "./ordercountData.array";

@Component({
  selector: 'app-ordercount',
  templateUrl: './ordercount.component.html',
  styleUrls: ['./ordercount.component.css']
})
export class OrdercountComponent implements OnInit {

  data : ordercount;

  constructor() {
  }

  ngOnInit() {
    this.data = ordercountData[0];

  }

}
