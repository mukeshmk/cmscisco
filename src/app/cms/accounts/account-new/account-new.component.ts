import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {account} from "../accounts.interface";
import {AccountsService} from "../accounts.service";
@Component({
  selector: 'app-account-new',
  templateUrl: './account-new.component.html',
  styleUrls: ['./account-new.component.css'],
  providers : [AccountsService]
})
export class AccountNewComponent implements OnInit {

  public organizationID : number;
  public accountsnewForm : FormGroup;
  public data : account;


  constructor(private route : ActivatedRoute, private _fb : FormBuilder,public __accountservice : AccountsService) {
    this.route.params.subscribe((params) => {
      this.organizationID = params['orgID'];
    });
      console.log(this.organizationID);
  }

  ngOnInit() {

    this.accountsnewForm = this._fb.group({
      orgID : [this.organizationID,Validators.required],
      accDetails : this._fb.group({
        orgName : ['',Validators.required],
        accName : ['',Validators.required],
        billingMethod : ['',Validators.required],
        billingFrequency : ['',Validators.required],
        paymentMethod : ['',Validators.required],
        paymentTerm : ['',Validators.required],
        currency : ['',Validators.required],
        accountType : ['',Validators.required],
        link : ['',Validators.required],
        accStatus :['',Validators.required],
        billDay : ['',Validators.required],
        mrr : ['',Validators.required],
        activeOn : ['',Validators.required]
      }),
      accAddress : this._fb.group({
        country : ['',Validators.required],
        street1 : ['',Validators.required],
        street2 : ['',Validators.required],
        city : ['',Validators.required],
        state : ['',Validators.required],
        zip : ['',Validators.required],
        phone : ['',Validators.required],
        fax : ['',Validators.required]
      }),
      accContacts : this._fb.group({
        firstName : ['',Validators.required],
        lastName : ['',Validators.required],
        title : ['',Validators.required],
        jobFunction : ['',Validators.required],
        department : ['',Validators.required],
        accEmail : ['',Validators.required],
        workPhone : ['',Validators.required]
      }),
      accAgents : this._fb.group({
        initialSalesRep : ['',Validators.required],
        currentOwner : ['',Validators.required],
        csm : ['',Validators.required],
        salesEngineer : ['',Validators.required],
        collector : ['',Validators.required],
        salesAccess : ['',Validators.required]
      })
    });
  }

  addAccounts(data){
    this.data = this.accountsnewForm.value;
    data.orgID = this.organizationID;
    this.__accountservice.addAccounts(data);
  }
}
