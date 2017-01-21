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
      orgID:["", Validators.required],
      orgName:["", Validators.required],
      parentOrg:["", Validators.required],
      orgDepartment:["", Validators.required],
      orgUpo:["", Validators.required],
      companyUrl:["", Validators.required],
      lastModified:["", Validators.required],
      orgEmail:["", Validators.required],
      loginName:["", Validators.required],
      orgPassword:["", Validators.required],
      confirmPassword:["", Validators.required],
      addressStreet1:["", Validators.required],
      addressStreet2:["", Validators.required],
      addressCity:["", Validators.required],
      addressState:["", Validators.required],
      addressZip:["", Validators.required],
      addressCounty:["", Validators.required],
      addressCountry:["", Validators.required],
      group:["", Validators.required],
      orgTeam:["", Validators.required],
      category:["", Validators.required],
      orgRole:["", Validators.required],
      reportsTo:["", Validators.required],
      isAContractor:["", Validators.required],
      orgExpDate:["", Validators.required],
      orgStatus : ["",Validators.required],
      orgTitle : ["",Validators.required]
    });
  }
  addOrg(data){
    this.data=data;
    this._orgService.addOrg(this.orgNewForm.value);
    alert("New Organization added!");
  }


}
