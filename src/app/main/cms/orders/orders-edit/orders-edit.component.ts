import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {OrdersService} from "../orders.service";
import {orders, orderPaymentDetail, orderContractImage, orderPoNumber, orderAccountProfile} from "../orders.interface";
import {account, accountAddress} from "../../accounts/accounts.interface";
import {organization} from "../../organization/oragnization.interface";
import {viewOrdersData} from "../view-orders/viewOrders.array";

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
  ordAccountProfileData : orderAccountProfile;

  ordPaymentDetailData : orderPaymentDetail;
  ordContractImageData : orderContractImage;
  ordImageFiles : Array<string>;
  orderEditAccountProfileFormGroup : FormGroup;
  ordPoNumberData : orderPoNumber;
  orderEditFormGroup : FormGroup;
  orderEditAddressFormGroup : FormGroup;
  orderPaymentDetailFormGroup : FormGroup;
  orderContractImageFormGroup : FormGroup;
  orderPoNumberFormGroup : FormGroup;
  orderManagePoFormVariable : boolean;


  constructor(private route : ActivatedRoute,public router : Router,public fb : FormBuilder, public _ordersService : OrdersService) {
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

    this.orderEditAccountProfileFormGroup = this.fb.group(
      {
        primarySalesRep : ['',Validators.required],
        teamName : ['',Validators.required],
        industry : ['',Validators.required],
        totalEmployees : ['',Validators.required],
        estAnnualSales : ['',Validators.required],
        knowledgeWorkers : ['',Validators.required],
        companyDescription : ['',Validators.required],
        businessHour : ['',Validators.required],
        businessTimeZone : ['',Validators.required],
        desktopOperatingSystemCur : ['',Validators.required],
        desktopOperatingSystemFut : ['',Validators.required],
        serverOperatingSystemCur : ['',Validators.required],
        serverOperatingSystemFut : ['',Validators.required],
        routingCur : ['',Validators.required],
        routingFut : ['',Validators.required],
        emailCur : ['',Validators.required],
        emailFut : ['',Validators.required],
        webCollaborationApplicationCur : ['',Validators.required],
        webCollaborationApplicationFut : ['',Validators.required],
        businessIMCur : ['',Validators.required],
        businessIMFut : ['',Validators.required],
        telephonyInternalCur: ['',Validators.required],
        telephonyInternalFut : ['',Validators.required],
        telephonyExternalCur : ['',Validators.required],
        telephonyExternalFut : ['',Validators.required],
        systemsManagementCur : ['',Validators.required],
        systemsManagementFut : ['',Validators.required],
        helpDeskCur : ['',Validators.required],
        helpDeskFut : ['',Validators.required],
        businessContinuanceCur : ['',Validators.required],
        businessContinuanceFut : ['',Validators.required],
        lmsCur : ['',Validators.required],
        lmsFut : ['',Validators.required],
        lcmsCur : ['',Validators.required],
        lcmsFut : ['',Validators.required],
        contentAuthoringCur : ['',Validators.required],
        contentAuthoringFut : ['',Validators.required],
        marketingAutomationCur : ['',Validators.required],
        marketingAutomationFut :['',Validators.required],
        broadcastingCur : ['',Validators.required],
        broadcastingFut : ['',Validators.required],
        salesDeptApplicationCur : ['',Validators.required],
        salesDeptApplicationFut : ['',Validators.required],
        projectManagementApplicationCur : ['',Validators.required],
        projectManagementApplicationFut : ['',Validators.required],
        initialWebExUsers : ['',Validators.required],
        corporateInternalMeeting : ['',Validators.required],
        internalTraining : ['',Validators.required],
        externalTraining : ['',Validators.required],
        pressAnalystBriefing : ['',Validators.required],
        salesDemos : ['',Validators.required],
        other : ['',Validators.required],
        externalTechnicalSupport : ['',Validators.required],
        internalTechnicalSupport : ['',Validators.required],
        largeMeeting : ['',Validators.required],
        projectManagement : ['',Validators.required],
        webminar : ['',Validators.required],
        informationNotAvailable : ['',Validators.required],
        departmentSelectingWebEx : ['',Validators.required],
        primaryDepartment : ['',Validators.required],
        customerServiceExternal : ['',Validators.required],
        engineeringRD : ['',Validators.required],
        humanResources : ['',Validators.required],
        legal : ['',Validators.required],
        sales : ['',Validators.required],
        trainingInternal : ['',Validators.required],
        prInvestorsRelation : ['',Validators.required],
        operation : ['',Validators.required],
        supportInternal : ['',Validators.required],
        accountingFinance : ['',Validators.required],
        itMis : ['',Validators.required],
        marketing : ['',Validators.required],
        trainingExternal : ['',Validators.required],
        companyWide : ['',Validators.required],
        manufacturing : ['',Validators.required],
        executiveManagement : ['',Validators.required],
        businessDevelopment : ['',Validators.required],
        other1 : ['',Validators.required],
        informationNotAvailable1 : ['',Validators.required]
      }
    );


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


    this.orderEditAddressFormGroup = this.fb.group(
      {
        address1 : ['',Validators.required],
        address2 : ['',Validators.required],
        city : ['',Validators.required],
        state : ['',Validators.required],
        country : ['',Validators.required],
        zip : ['',Validators.required]
      }
    );

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

  viewAddressModal(){
    jQuery('#addressModal').modal('show');
  }

  saveOrderAddress(data){
    this.data.ordContact[0].address1= this.orderEditAddressFormGroup.value.address1;
    this.data.ordContact[0].address2= this.orderEditAddressFormGroup.value.address2;
    this.data.ordContact[0].city= this.orderEditAddressFormGroup.value.city;
    this.data.ordContact[0].state= this.orderEditAddressFormGroup.value.stat;
    this.data.ordContact[0].country= this.orderEditAddressFormGroup.value.country;
    this.data.ordContact[0].zip= this.orderEditAddressFormGroup.value.zip;

    console.log(this.data.ordContact[0]);
    jQuery('#addressModal').modal('hide');
  }


  viewEditAccountProfile(){
    jQuery('#editAccountProfile').modal('show');
  }

  saveOrderEditAccountProfile(data) {
    this.ordAccountProfileData = this.orderEditAccountProfileFormGroup.value;
    console.log(this.ordAccountProfileData);
    this._ordersService.addNewAccountProfile(this.ordAccountProfileData, this.orderID);
    jQuery('#editAccountProfile').modal('hide');
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

  deletePaymentDetail(){
    this.ordPaymentDetailData = this.orderPaymentDetailFormGroup.value;
    console.log(this.ordPaymentDetailData);
    this._ordersService.deletePaymentDetails(this.ordPaymentDetailData, this.orderID);
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


  navigateToOrders(){
    var x = this._ordersService.returnOrderIndex(this.data,this.orderID);
    viewOrdersData[x].orderStatus = 'End Completed';
    this.router.navigate(['/orders']);
  }

  saveCorrections(){
    var x = this._ordersService.returnOrderIndex(this.data,this.orderID);
    viewOrdersData[x].orderStatus = 'Pending Corrections';
    this.router.navigate(['/orders']);
  }

  nameCheck(){
    if(this.orgData.orgCompanyInfo.orgName.localeCompare(this.orderEditFormGroup.value.organizationName)){
      console.log("done");
      this.router.navigate(['orders']);
    }
    else{
      alert("Organization Name does not match");
    }
  }

}
