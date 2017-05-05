import {Injectable} from "@angular/core";
import {orders} from "./orders.interface";
import {ordersData} from "./orders.array";
import {account} from "../accounts/accounts.interface";
import {organization} from "../organization/oragnization.interface";
import {accountData} from "../accounts/accounts.array";
import {orgData} from "../organization/orgData.array";

@Injectable()
export class OrdersService{
  public data : orders;
  public accData : account;
  public  orgData : organization;

  returnOrderIndex(data,ordID){
    var x= ordersData.findIndex((ord) => {
      return(ord.ordID == ordID)
    });

    if(x < 0) return -1;

    else return x;
  }

  //initializing order data
  getOrdersDataByOrgName(ordID){
    this.data =  ordersData.find(
      ord => {
        return ord.ordID == ordID;
      }
    );

    console.log(this.data);
    return this.data;

  }

  //initialising the account data
  getAccountDataByOrgName(ordID){
    this.data =  ordersData.find(
      ord => {
        return ord.ordID == ordID;
      }
    );

    var x= this.data.orgID;

    this.accData = accountData.find(
      acc => {
        return acc.orgID == x;
      }
    );

    console.log(this.accData);
    return this.accData;

  }


  //initializing the organization data
  getOrgDataByOrgName(ordID){
    this.data =  ordersData.find(
      ord => {
        return ord.ordID == ordID;
      }
    );

    var x= this.data.orgID;

    console.log(x);


    this.orgData = orgData.find(
      org => {
        return org.orgID == x;
      }
    );

    console.log(this.orgData);
    return this.orgData;

  }

  //add Contract New Terms
  addContractNewTerms(data,ordID){
    var x= ordersData.findIndex((ord) => {
      return(ord.ordID == ordID)
    });

    console.log(ordID);
    console.log(x);

    if(x < 0) return -1;

    ordersData[x].ordContractTerm = data;
    console.log(ordersData[x].ordContractTerm);

    return 1;
  }

  //add New Provision
  addNewProvision(data,ordID){
    var x= ordersData.findIndex((ord) => {
      return(ord.ordID == ordID)
    });

    if(x < 0) return -1;

    ordersData[x].ordProvision = data;

    return 1;
  }

  //add New Parameter
  addNewParameter(data,ordID){
    var x= ordersData.findIndex((ord) => {
      return(ord.ordID == ordID)
    });

    if(x < 0) return -1;

    ordersData[x].ordParameter = data;

    return 1;
  }

  //add New Contact
  addNewContact(data,ordID){
    var x= ordersData.findIndex((ord) =>{
      return(ord.ordID == ordID)
    });
    if (x < 0) return -1;

    ordersData[x].ordContact.push(data);

    return 1;
  }

  //add New Agent
  addNewAgent(data,ordID){
    var x= ordersData.findIndex((ord) =>{
      return(ord.ordID == ordID)
    });
    if (x < 0) return -1;

    ordersData[x].ordAgent.push(data);

    return 1;
  }

  /*//editing existing Contact
  editContact(data,orgID,contactID){
    var x= ordersData.findIndex((ord) =>{
      return(ord.orgID === orgID)
    });
    if (x < 0) return -1;

    ordersData[x].ordContact[contactID] = data;

  }*/

  //add Account Profile
  addNewAccountProfile(data,ordID){
    var x= ordersData.findIndex((ord) =>{
      return(ord.ordID == ordID)
    });
    if (x < 0) return -1;

    ordersData[x].ordAccountProfile = data;

    return 1;
  }


  editPaymentDetail(data,ordID){
    var x= ordersData.findIndex((ord) =>{
      return(ord.ordID == ordID)
    });
    if (x < 0) return -1;

    ordersData[x].ordPaymentDetail = data;

    return 1;
  }

  deletePaymentDetails(data,ordID){
    var x= ordersData.findIndex((ord) =>{
      return(ord.ordID == ordID)
    });
    if (x < 0) return -1;

    ordersData[x].ordPaymentDetail.creditCardNumber="";
    ordersData[x].ordPaymentDetail.nameInCard="";
    ordersData[x].ordPaymentDetail.cardSecurityCode="";

    console.log(ordersData[x].ordPaymentDetail);


    return 1;
  }

  //add New Order
  addNewOrder(data,ordID){
    var x= ordersData.findIndex((ord) =>{
      return(ord.ordID == ordID)
    });
    if (x < 0) return -1;

    ordersData[x].ordNewOrder = data;

    return 1;
  }

  //edit Contract Image Modal
  addContractImage(data,ordID){
    var x= ordersData.findIndex((ord) =>{
      return(ord.ordID == ordID)
    });
    if (x < 0) return -1;

    ordersData[x].ordContractImage = data;

    return 1;
  }

  addNewImageFile(data,ordID){
    var x= ordersData.findIndex((ord) =>{
      return(ord.ordID == ordID)
    });
    if (x < 0) return -1;

    ordersData[x].ordContractImage.files = data;
    console.log(ordersData[x].ordContractImage);

    return 1;
  }

  addPoNumber(data,ordID){
    var x= ordersData.findIndex((ord) =>{
      return(ord.ordID == ordID)
    });
    if (x < 0) {return -1;}

    ordersData[x].ordPoNumber.push(data);
    console.log(data);
    console.log(ordersData[x].ordPoNumber);

    return 1;
  }

}
