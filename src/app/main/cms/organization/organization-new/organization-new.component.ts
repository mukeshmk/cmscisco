import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
import {organizationService} from "../organization.service";
import {organization} from "../oragnization.interface";
import {orgData} from "../orgData.array";

@Component({
  selector: 'app-organization-new',
  templateUrl: './organization-new.component.html',
  styleUrls: ['./organization-new.component.css'],
  providers:[organizationService]
})
export class OrganizationNewComponent implements OnInit {

  data : organization;
  orgNewForm:FormGroup;


  constructor(private route : ActivatedRoute, private  _orgService : organizationService, public fb: FormBuilder,public router: Router) { }


  ngOnInit() {
    this.orgNewForm = this.fb.group({
      orgID : ['', Validators.required],
      orgCompanyInfo : this.fb.group(
        {
          orgName : ['', Validators.required],
          upo : ['', Validators.required],
          sfdfDealID : ['', Validators.required],
          language : ['', Validators.required],
          customerURL : ['', Validators.required],
          industry : ['', Validators.required],
          estAnnualRevSales : ['', Validators.required],
          estNumberOfEmployees :['', Validators.required],
          parentOrg : ['rty6', Validators.required],
          companyURL : ['ghhjj@hmail.com', Validators.required],
          lastModified : ['12-5-90', Validators.required],
          status : ['Active', Validators.required]
        }),
      orgAddress : this.fb.group(
        {
          addressTypeMapping : ['Business', Validators.required],
          addressList : ['Business', Validators.required],
          country : ['', Validators.required],
          street1 : ['', Validators.required],
          street2: ['', Validators.required],
          city : ['', Validators.required],
          state : ['', Validators.required],
          zip : ['', Validators.required],
          phone : ['', Validators.required],
          fax : ['', Validators.required]
        }),
      orgContactBilling : this.fb.group(
        {
          contactType : ['', Validators.required],
          individualName : ['', Validators.required],
          firstName : ['', Validators.required],
          lastName : ['', Validators.required],
          title : ['', Validators.required],
          jobFunction : ['', Validators.required],
          department : ['', Validators.required],
          email : ['', Validators.required],
          workPhone : ['', Validators.required],
          homePhoneBilling : ['', Validators.required],
          cellPhoneBilling : ['', Validators.required],
          faxBilling : ['', Validators.required],
          reportsToBilling : ['', Validators.required],
          marketingProjectBilling : ['', Validators.required],
          referredByBilling : ['', Validators.required],
          street1Billing : ['', Validators.required],
          street2Billing : ['', Validators.required],
          cityBilling : ['', Validators.required],
          stateBilling : ['', Validators.required],
          zipBilling : ['', Validators.required],
          notesBilling : ['', Validators.required]
        }),
      orgContactBusiness : this.fb.group(
        {
          firstNameBusiness : ['', Validators.required],
          lastNameBusiness : ['', Validators.required],
          titleBusiness : ['', Validators.required],
          jobFunctionBusiness : ['', Validators.required],
          departmentBusiness :  ['', Validators.required],
          emailBusiness : ['', Validators.required],
          workPhoneBusiness : ['', Validators.required]
        }),
      orgAgents : this.fb.group(
        {
          initialSR :['', Validators.required],
          currentOwner :['', Validators.required],
          salesEngineer : ['', Validators.required],
          salesAccess : ['', Validators.required]
        })
    });
  }


  addOrg(data){
    this.data = this.orgNewForm.value;
    console.log(this.data);
    this._orgService.addOrg(this.data);
    this.router.navigate(['/vieworganization']);
  }

}
