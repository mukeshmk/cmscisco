import { Component, OnInit } from '@angular/core';
import {organizationService} from "../organization.service";
import {organization} from "../oragnization.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder,  Validators, FormControl, FormGroup} from "@angular/forms";

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

    this.orgEditForm = this.fb.group({
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


    this.route.params.subscribe((params) => {
      this.orgID = params['orgID'];
      this.data = this._orgService.getOrgByOnlineName(this.orgID);
      console.log(this.data);
    });
  }

  saveOrg(){
    var status = this._orgService.saveOrg(this.data);
    if(status == 1){
      alert("Data Saved!");
    }else{
      alert("This user does not exist in our database!");
    }
    return false;
  }

}
