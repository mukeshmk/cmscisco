import { Injectable } from '@angular/core';
import {accountData} from "./accounts.array";
import {account} from "./accounts.interface";
import {organization} from "../organization/oragnization.interface";
import {orgData} from "../organization/orgData.array";

@Injectable()
export class AccountsService {
    public data : account;

    getAccountsDataByOrgName(orgID){
        this.data =  accountData.find(
            acc => {
                return acc.orgID == orgID;
            }
        );

        console.log(this.data);
        return this.data;

    }

    addAccounts(data){
        this.data = data;
        var prevLength = accountData.length;
        var currLength = accountData.push(this.data);

        console.log(prevLength);
        console.log(currLength);
        console.log(accountData);
    }

    addAddressData(data,orgID){
        var x = accountData.findIndex((org) => {
            return org.orgID == orgID;
        });

        if(x < 0) return -1;

        accountData[x].accAddress.push(data);

        return 1;
    }

    //Edit the accountDetails to array for corresponding orgID
    saveAccountDetails(data,orgID){

        var x = accountData.findIndex((org) => {
            return org.orgID == orgID;
        });

        if(x < 0) return -1;

        accountData[x].accDetails = data;
        console.log(accountData[x].accDetails);

        return 1;
    }


    returnIndexbyOrgID(orgID){

        return accountData.findIndex((org) => {
            return org.orgID == orgID;
        });
    }

  addSplitCriteriaData(data,orgID){
    var x = accountData.findIndex((org) => {
      return org.orgID == orgID;
    });

    if(x < 0) return -1;

    accountData[x].manageSplitCriteria.push(data);

    return 1;
  }

  addPoNumberData(data,orgID){
    var x = accountData.findIndex((org) => {
      return org.orgID == orgID;
    });

    if(x < 0) return -1;

    accountData[x].managePoNumbers.push(data);

    return 1;
  }


  addInvoiceDefinitionData(data,orgID){
    var x = accountData.findIndex((org) => {
      return org.orgID == orgID;
    });

    if(x < 0) return -1;

    accountData[x].manageInvoiceDefinition=data;

    return 1;
  }

  addActivityNoteData(data,orgID){
    var x = accountData.findIndex((org) => {
      return org.orgID == orgID;
    });

    if(x < 0) return -1;

    accountData[x].activityNotes.push(data);

    return 1;
  }



    editAccountAddress(data,orgID){

        var x = accountData.findIndex((org) => {
            return org.orgID == orgID;
        });

        if(x < 0) return -1;

        accountData[x].accAddress[0] = data;

        console.log(accountData[x].accAddress);
    }

    savePaymentDetails(data,orgID){

        var x = accountData.findIndex((org) => {
            return org.orgID == orgID;
        });

        if(x < 0) return -1;

        accountData[x].paymentDetails = data;
    }


    changeAccountStatus(orgID){
      var str = "Inactive";
      var x = orgData.findIndex((org) => {
        return org.orgID == orgID;
      });

      if(x < 0) return -1;

      orgData[x].status = str ;
      console.log(orgData[x].status);
    }
}
