import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AccountsService} from "../accounts.service";
import {account, accountAddress, accountDetails} from "../accounts.interface";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";


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
  accountDetailsFormGroup : FormGroup;
    accountEditAddressFormGroup : FormGroup;
    displayNewSplitCriteria : boolean;

  constructor(private route : ActivatedRoute,public __accountservice : AccountsService,public _fb : FormBuilder,public _fb1 : FormBuilder) {
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

      this.accountEditAddressFormGroup = this._fb1.group(
          {
              country : ['',Validators.required],
              street1 : ['',Validators.required],
              street2 : ['',Validators.required],
              city : ['',Validators.required],
              state : ['',Validators.required],
              zip : ['',Validators.required],
              phone : ['',Validators.required],
              fax : ['',Validators.required],
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
  }

  viewAddressModal(){
      jQuery('.ui.modal').modal('show');
      console.log("Modal called");
  }


  setNewSplitCriteria(){
      console.log("NewClicked",this.displayNewSplitCriteria);
      this.displayNewSplitCriteria = true;
  }
}
