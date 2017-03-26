import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {ordercount} from "./ordercount.interface";
import {ordercountData} from "./ordercountData.array";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ordercount',
  templateUrl: './ordercount.component.html',
  styleUrls: ['./ordercount.component.css']
})
export class OrdercountComponent implements OnInit {

  data : ordercount;
  orderCountFormGroup : FormGroup;

  constructor(public _fb : FormBuilder) {
  }

  ngOnInit() {
    this.data = ordercountData[0];

    this.orderCountFormGroup = this._fb.group(
      {
        newOrders : ['',Validators.required],
        pendingCorrections : ['',Validators.required],
        outStanding : ['',Validators.required],
        accepted : ['',Validators.required],
        effective : ['',Validators.required],
        processed : ['',Validators.required],
      });
  }

}
