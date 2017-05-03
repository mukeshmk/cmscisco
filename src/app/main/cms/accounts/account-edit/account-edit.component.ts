import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AccountsService} from "../accounts.service";
import {
  account, accountAddress, accountDetails, accountManageSplitCriteria,
  accountManagePoNumbers, accountManageInvoiceDefinition, accountActivityNotes, countryDropDown, stateDropDown
} from "../accounts.interface";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {orgData} from "../../organization/orgData.array";
import {ordersData} from "../../orders/orders.array";

declare var jQuery :any;
@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css'],
  providers : [AccountsService],

})
export class AccountEditComponent implements OnInit {

  organizationID : number;
  data : account;
  addressData : accountAddress;
  accData : accountDetails;
  accAddressData : accountAddress;
  accSplitCriteriaData : accountManageSplitCriteria;
  accPoNumberData : accountManagePoNumbers;
  accInvoiceDefinitionData : accountManageInvoiceDefinition;
  accActivityNoteData : accountActivityNotes;
  accountDetailsFormGroup : FormGroup;
  accountEditAddressFormGroup : FormGroup;
  accountSplitCriteriaFormGroup :FormGroup;
  accountPoNumberFormGroup :FormGroup;
  accountInvoiceDefinitionFormGroup : FormGroup;
  accountActivityNotesFormGroup : FormGroup;
  displayNewSplitCriteria : boolean;
  displayNewPoNumber : boolean;
  tableShow :  boolean;

  //to display country dropdown
  selectedCountry : countryDropDown = new countryDropDown('India');
  countries =[
    new countryDropDown('Afghanistan'),
    new countryDropDown('Albania'),
    new countryDropDown('India'),
    new countryDropDown('Australia'),
    new countryDropDown('Sri Lanka')
  ];

  //to display state dropdown
  selectedState : stateDropDown = new stateDropDown('Tamil Nadu');
  states = [
    new stateDropDown('Delhi'),
    new stateDropDown('UP'),
    new stateDropDown('Tamil Nadu')
  ];


  constructor(private route : ActivatedRoute,public router : Router,public __accountservice : AccountsService,public _fb : FormBuilder) {
    this.route.params.subscribe((params) => {
      this.organizationID = params['orgID'];
    });
    console.log("organization",this.organizationID);
  }

  addAddress(addressData){
    this.addressData = addressData;
    this.__accountservice.addAddressData(this.addressData,this.organizationID);
  }

  ngOnInit() {
      this.data = this.__accountservice.getAccountsDataByOrgName(this.organizationID);
      this.displayNewSplitCriteria = false;
      this.displayNewPoNumber = false;
      this.tableShow = false;
      console.log(this.data);

      this.accountDetailsFormGroup = this._fb.group(
          {
            accName : ['',Validators.required],
            billingMethod : ['',Validators.required],
            billingFrequency : ['',Validators.required],
            paymentMethod : ['',Validators.required],
            paymentTerm :['',Validators.required],
            billDay : ['',Validators.required],
            activeOn : ['',Validators.required]
          }
      );

      this.accountEditAddressFormGroup = this._fb.group(
          {
              country : ['',Validators.required],
              street1 : ['',Validators.compose([Validators.required,Validators.minLength(5)])],
              street2 : ['',Validators.compose([Validators.required,Validators.minLength(5)])],
              city : ['',Validators.compose([Validators.required,Validators.minLength(5)])],
              state : ['',Validators.required],
              zip : ['',Validators.compose([Validators.required,Validators.pattern("^[0-9]{6}$")])],
              phone : ['',Validators.compose([Validators.required,Validators.pattern("^[0-9]{10}$")])],
              fax :  ['',Validators.compose([Validators.required,Validators.pattern("^[0-9]{10}$")])],
          }
      );



      this.accountSplitCriteriaFormGroup = this._fb.group(
        {
          splitCriteria: ['', Validators.required],
          splitBillfromAccount: ['', Validators.required],
          description: ['', Validators.required]
        }
      );

      this.accountPoNumberFormGroup = this._fb.group(
        {
          poNumber : ['',Validators.required],
          description : ['',Validators.required]
        }
      );

      this.accountInvoiceDefinitionFormGroup = this._fb.group(
        {
          name : ['',Validators.required]
        }
      );

      this.accountActivityNotesFormGroup = this._fb.group(
        {
          noteType : ['',Validators.required],
          activity : ['',Validators.required],
          subject : ['',Validators.required],
          comments : ['',Validators.required],
          distributionList : ['',Validators.required]
        }
      );
  }

  //AccountDetials save
  saveAccountDetails(data){
    this.accData = this.accountDetailsFormGroup.value;
      console.log(this.accData);
    this.__accountservice.saveAccountDetails(this.accData,this.organizationID);
  }

  //Edit account Address
  saveAccountAddress(data){
      this.accAddressData = this.accountEditAddressFormGroup.value;
      console.log(this.accAddressData);
      this.__accountservice.editAccountAddress(this.accAddressData,this.organizationID);
      jQuery('#addressModal').modal('hide');
  }
  //Add split Criteria
  saveSplitCriteria(data){
    this.accSplitCriteriaData = this.accountSplitCriteriaFormGroup.value;
    console.log(this.accSplitCriteriaData);
    this.__accountservice.addSplitCriteriaData(this.accSplitCriteriaData,this.organizationID);
    this.hideSplitCriteriaModal();
  }

  //Add PO numbers
  savePoNumber(data){
    this.accPoNumberData = this.accountPoNumberFormGroup.value;
    console.log(this.accPoNumberData);
    this.__accountservice.addPoNumberData(this.accPoNumberData,this.organizationID);
    this.hideManagePoNumberModal();
  }

  saveInvoiceDefinition(data){
    this.accInvoiceDefinitionData = this.accountInvoiceDefinitionFormGroup.value;
    console.log(this.accInvoiceDefinitionData);
    this.__accountservice.addInvoiceDefinitionData(this.accInvoiceDefinitionData,this.organizationID);
    this.hideInvoiceDefinitionModal();
  }

  saveNewActivityNote(data){
    this.accActivityNoteData = this.accountActivityNotesFormGroup.value;
    console.log(this.accActivityNoteData);
    this.__accountservice.addActivityNoteData(this.accActivityNoteData,this.organizationID);
    jQuery('#newActivityNotes').modal('hide');
    this.tableShow=false;
  }


  viewAddressModal(){
      jQuery('#addressModal').modal({
        observeChanges: true
      }).modal('show');
  }

  viewSplitCriteriaModal(){
    jQuery('#splitCriteriaModal').modal({
      observeChanges : true
    }).modal('show');
  }

  viewManagePoNumberModal(){
    jQuery('#managePoNumberModal').modal({
        observeChanges : true
    }).modal('show');
  }

  viewActivityNotesModal(){
    jQuery('#viewActivityModal').modal({
      allowMultiple : true
    });
    jQuery('#newActivityNotes').modal('attach events','#newButton');
    jQuery('#viewActivityModal').modal('show');
  }

  viewCancelledServiceModal(){
    jQuery('#cancelledServiceModal').modal('show');
  }

  viewInvoiceDefinitionModal(){
    jQuery('#invoiceDefinitionModal').modal('show');
  }

  hideSplitCriteriaModal(){
    jQuery('#splitCriteriaModal').modal('hide');
    this.displayNewSplitCriteria =false;
  }

  hideManagePoNumberModal(){
    jQuery('#managePoNumberModal').modal('hide');
    this.displayNewPoNumber =false;
  }


  hideInvoiceDefinitionModal(){
    jQuery('#invoiceDefinitionModal').modal('hide');
  }

  showTable(){
    this.tableShow = true;
  }

  setNewSplitCriteria(){
      this.displayNewSplitCriteria = true;
  }

  setNewPoNumber(){
    this.displayNewPoNumber = true;
  }

  changeAccountStatus(){
    this.__accountservice.changeAccountStatus(this.organizationID);
    this.router.navigate(['/accounts']);
  }


  findAccountStatus(){
    var x = orgData.findIndex((org) => {
      return org.orgID == this.organizationID.toString();
    });
    console.log(x);

    if( orgData[x].status.localeCompare("Pending")){
      console.log(orgData[x].status);
      return true;
    }
    else
      return false;
  }
  navigateToOrders(){
    var x = ordersData.findIndex((org) => {
      return org.orgID == this.organizationID;
    });
    var y = ordersData[x].ordID;
    this.router.navigate(['/orders/new',y]);
  }
}
