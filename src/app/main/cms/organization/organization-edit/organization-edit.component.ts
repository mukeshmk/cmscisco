import { Component, OnInit } from '@angular/core';
import {organizationService} from "../organization.service";
import {organization, companyInfo, address, contactBilling} from "../oragnization.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder,  Validators, FormControl, FormGroup} from "@angular/forms";

declare var jQuery :any;

@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['./organization-edit.component.css'],
  providers: [organizationService]
})
export class OrganizationEditComponent implements OnInit {

  data : organization;
  orgID;
  orgEditForm :FormGroup;
  organizationAddAddressFormGroup : FormGroup;
  organizationAddContactFormGroup : FormGroup;
  orgCompanyInfoData : companyInfo;
  orgAddressData : address;
  orgContactBillingData : contactBilling;

  constructor(private route : ActivatedRoute, private  _orgService : organizationService, public fb: FormBuilder,public router: Router) {

    this.route.params.subscribe((params) => {
      this.orgID = params['orgID'];

      this.data = this._orgService.getOrgByOnlineName(this.orgID);
      if (this.data == undefined) {
        alert("This organization does not exist in our database!");
        this.router.navigate(['/organization']);
      }

    });
  }


  ngOnInit() {

    this.orgEditForm = this.fb.group(
      {
        orgID:['', Validators.required],
        orgName : ['',Validators.required],
        upo : ['',Validators.required],
        sfdfDealID : ['',Validators.required],
        language : ['',Validators.required],
        customerURL : ['',Validators.required],
        industry : ['',Validators.required],
        estAnnualRevSales : ['',Validators.required],
        estNumberOfEmployees : ['',Validators.required]
      }
    );

    this.organizationAddAddressFormGroup = this.fb.group(
      {
        addressTypeMapping : ['',Validators.required],
        addressList : ['',Validators.required],
        country : ['',Validators.required],
        street1 : ['',Validators.required],
        street2: ['',Validators.required],
        city : ['',Validators.required],
        state : ['',Validators.required],
        zip : ['',Validators.required],
        phone : ['',Validators.required],
        fax : ['',Validators.required]
      }
    );

    this.organizationAddContactFormGroup = this.fb.group(
      {
        contactType : ['',Validators.required],
        individualName : ['',Validators.required],
        firstName : ['',Validators.required],
        lastName : ['',Validators.required],
        title : ['',Validators.required],
        jobFunction : ['',Validators.required],
        department : ['',Validators.required],
        email : ['',Validators.required],
        workPhone : ['',Validators.required],
        homePhoneBilling : ['',Validators.required],
        cellPhoneBilling : ['',Validators.required],
        faxBilling : ['',Validators.required],
        reportsToBilling : ['',Validators.required],
        marketingProjectBilling : ['',Validators.required],
        referredByBilling : ['',Validators.required],
        street1Billing : ['',Validators.required],
        street2Billing : ['',Validators.required],
        cityBilling : ['',Validators.required],
        stateBilling : ['',Validators.required],
        zipBilling : ['',Validators.required],
        notesBilling : ['',Validators.required]
      });

  }

  saveOrg(data){
    this.orgCompanyInfoData = this.orgEditForm.value;
    console.log(this.orgCompanyInfoData);
    this._orgService.addCompanyInfo(this.orgCompanyInfoData,this.orgID);
  }

  viewOrgAddressModal(){
    jQuery('#addressModal').modal('show');
  }

  saveOrganizationAddress(data){
    this.orgAddressData = this.organizationAddAddressFormGroup.value;
    console.log(this.orgAddressData);
    this._orgService.addAddress(this.orgAddressData,this.orgID);
    jQuery('#addressModal').modal('hide');
  }

  viewOrgContactModal(){
    jQuery('#contactModal').modal('show');
  }
  saveOrganizationContact(data){
    this.orgContactBillingData = this.organizationAddContactFormGroup.value;
    console.log(this.orgContactBillingData);
    this._orgService.addContactBilling(this.orgContactBillingData,this.orgID);
    jQuery('#contactModal').modal('hide');
  }


  navigateAccounts(){
    this.router.navigate(['/accounts/new',this.orgID]);
  }


}
