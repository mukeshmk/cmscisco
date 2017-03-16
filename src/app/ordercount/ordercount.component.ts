
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
  totalProcessedOrdersChecked : boolean;
  newOrdersChecked : boolean;
  totalEffectiveOrdersChecked : boolean;
  acceptedOrdersChecked : boolean;

  constructor() {
  }

  newOrdersClicked(){

    this.totalProcessedOrdersChecked = false;
    this.newOrdersChecked = true;
    this.totalEffectiveOrdersChecked = false;
    this.acceptedOrdersChecked = false;

  }

  totalStatusClicked(){

    this.totalProcessedOrdersChecked = false;
    this.newOrdersChecked = false;
    this.totalEffectiveOrdersChecked = true;
    this.acceptedOrdersChecked = false;
  }

  totalProcessClicked(){

    this.totalProcessedOrdersChecked = true;
    this.newOrdersChecked = false;
    this.totalEffectiveOrdersChecked = false;
    this.acceptedOrdersChecked = false;
  }
  totalAcceptedClicked(){

    this.totalProcessedOrdersChecked = false;
    this.newOrdersChecked = false;
    this.totalEffectiveOrdersChecked = false;
    this.acceptedOrdersChecked = true;
  }
  ngOnInit() {
    this.data = ordercountData[0];
  }




}

