import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {OrdersService} from "../orders.service";
import {orders, orderPaymentDetail, orderContractImage, orderPoNumber} from "../orders.interface";
import {account} from "../../accounts/accounts.interface";
import {organization} from "../../organization/oragnization.interface";

declare var jQuery : any;

@Component({
  selector: 'app-orders-edit',
  templateUrl: './orders-edit.component.html',
  styleUrls: ['./orders-edit.component.css'],
  providers: [OrdersService]
})
export class OrdersEditComponent implements OnInit {

  orderID : number;
  data : orders;
  accData : account;
  orgData : organization;

  ordPaymentDetailData : orderPaymentDetail;
  ordContractImageData : orderContractImage;
  ordImageFiles : Array<string>;
  ordPoNumberData : orderPoNumber;
  orderEditFormGroup : FormGroup;
  orderPaymentDetailFormGroup : FormGroup;
  orderContractImageFormGroup : FormGroup;
  orderPoNumberFormGroup : FormGroup;
  orderManagePoFormVariable : boolean;


  constructor(private route : ActivatedRoute,public fb : FormBuilder, public _ordersService : OrdersService) {
    this.route.params.subscribe((params) => {
      this.orderID = params['ordID'];
    });
    console.log("order",this.orderID);
  }

  ngOnInit() {

    this.data=this._ordersService.getOrdersDataByOrgName(this.orderID);
    this.accData=this._ordersService.getAccountDataByOrgName(this.orderID);
    this.orgData=this._ordersService.getOrgDataByOrgName(this.orderID);

    this.orderManagePoFormVariable = false;



    this.orderEditFormGroup = this.fb.group(
      {
        accountName : ['',Validators.required],
        organizationName : ['',Validators.required],
        accountId : ['',Validators.required],
        organizationType : ['',Validators.required],
        paymentTerm : ['',Validators.required],
        orderStatus : ['',Validators.required],
        sellType : ['',Validators.required],
        preOrderDetails : ['',Validators.required],
        orderType : ['',Validators.required],
        postOrderDetails : ['',Validators.required],
        creationDate : ['',Validators.required],
        currency : ['',Validators.required],
        exchangeRate : ['',Validators.required],
        exchangeRateDate : ['',Validators.required],
        cmtOwner : ['',Validators.required],
        mrr : ['',Validators.required],
        createdBy : ['',Validators.required],
        upsellReasonCode : ['',Validators.required],
        sfdfDealNo : ['',Validators.required],
        comments : ['',Validators.required],
        primarySR1 : ['',Validators.required],
        primarySR2 : ['',Validators.required],
        primarySR3 : ['',Validators.required],
        primarySR4 : ['',Validators.required],
        secondSR1 : ['',Validators.required],
        secondSR2 : ['',Validators.required],
        secondSR3 : ['',Validators.required],
        secondSR4 : ['',Validators.required],
        thirdSR1 : ['',Validators.required],
        thirdSR2 : ['',Validators.required],
        thirdSR3 : ['',Validators.required],
        thirdSR4 : ['',Validators.required],
        CSM1 : ['',Validators.required],
        CSM2 : ['',Validators.required],
        CSM3 : ['',Validators.required],
        CSM4 : ['',Validators.required]
      });

    this.orderPaymentDetailFormGroup = this.fb.group(
      {
        paymentMethod : ['',Validators.required],
        creditCard : ['',Validators.required],
        creditCardNumber : ['',Validators.required],
        expirationDateMonth : ['',Validators.required],
        expirationDateYear : ['',Validators.required],
        nameInCard : ['',Validators.required],
        cardSecurityCode : ['',Validators.required],
      });
    this.orderContractImageFormGroup = this.fb.group(
      {
        serviceConfiguration : ['',Validators.required],
        files : ['',Validators.required],
        imageName : ['',Validators.required],
        imageDescription : ['',Validators.required]
      });

    this.orderPoNumberFormGroup = this.fb.group(
      {
        poNumber : ['',Validators.required],
        description : ['',Validators.required]
      });

  }

  viewEditPaymentDetailModal(){
    jQuery('#editPaymentMethod').modal('show');
  }

  saveOrderEditPaymentDetail(data){
    this.ordPaymentDetailData = this.orderPaymentDetailFormGroup.value;
    console.log(this.ordPaymentDetailData);
    this._ordersService.editPaymentDetail(this.ordPaymentDetailData, this.orderID);
    jQuery('#editPaymentMethod').modal('hide');
  }


  viewImageContractModal(){
    jQuery('#contractImageModal').modal('show');
  }

  saveContractImage(data){
    this.ordContractImageData = this.orderContractImageFormGroup.value;
    console.log(this.ordContractImageData);
    this._ordersService.addContractImage(this.ordContractImageData,this.orderID);
    jQuery('#contractImageModal').modal('hide');
  }

  saveImageFile(data){
    this.ordImageFiles = data;
    this._ordersService.addNewImageFile(this.ordImageFiles,this.orderID);
    console.log(this.ordImageFiles);
  }

  viewManagePoNumber(){
    jQuery('#managePoNumberModal').modal({
      observeChanges : true
    }).modal('show');
  }

  setNewPoNumber(){
    this.orderManagePoFormVariable = true;
  }

  hideManagePoNumberModal(){
    jQuery('#managePoNumberModal').modal('hide');
    this.orderManagePoFormVariable =false;
  }

  savePoNumber(data){
    this.ordPoNumberData = this.orderPoNumberFormGroup.value;
    this._ordersService.addPoNumber(this.ordPoNumberData,this.orderID);
    console.log(data);
    console.log(this.ordPoNumberData);
    this.orderManagePoFormVariable = false;
  }


}
