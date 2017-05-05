import { Injectable } from '@angular/core';
import { orgData} from "./orgData.array";
import {organization} from "./oragnization.interface";


@Injectable()
export class organizationService{
  orgData: organization;
  constructor() {
  }

  getOrg(){
    return orgData;
  }

  getOrgByOnlineName(orgID){
    return orgData.find( org => {
      return org.orgID == orgID;
    });

  }



  addCompanyInfo(data,orgID){
    var x = orgData.findIndex((org) => {
      return org.orgID == orgID;
    });

    if(x < 0){
      return -1;
    }
    orgData[x].orgCompanyInfo= data;
    return 1;
  }

  addAddress(data,orgID){

    var x = orgData.findIndex((org) => {
      return org.orgID == orgID;
    });

    if(x < 0){
      return -1;
    }
    orgData[x].orgAddress.push(data);
    return 1;
  }

  addContactBilling(data,orgID){
    var x = orgData.findIndex((org) => {
      return org.orgID == orgID;
    });

    if(x < 0){
      return -1;
    }
    orgData[x].orgContactBilling.push(data);
    return 1;
  }

  addContactBusiness(data,orgID){
    var x = orgData.findIndex((org) => {
      return org.orgID == orgID;
    });

    if(x < 0){
      return -1;
    }
    orgData[x].orgContactBusiness.push(data);
    return 1;
  }

  addAgents(data,orgID){
    var x = orgData.findIndex((org) => {
      return org.orgID == orgID;
    });

    if(x < 0){
      return -1;
    }
    orgData[x].orgAgents.push(data);
    return 1;
  }

  addOrg(data)
  {
    this.orgData=data;
    var prevLen=orgData.length;
    var curLen= orgData.push(this.orgData);

    console.log(curLen);
    console.log(prevLen);
    console.log(orgData);
  }

}
