import {Injectable} from "@angular/core";
import {orders} from "./orders.interface";
import {ordersData} from "./orders.array";

@Injectable()
export class OrdersService{
  public data : orders;

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

  //add Contract New Terms
  addContractNewTerms(data,ordID){
    var x= ordersData.findIndex((ord) => {
      return(ord.ordID === ordID)
    });

    if(x < 0) return -1;

    ordersData[x].ordContractTerm = data;

    return 1;
  }

  //add New Provision
  addNewProvision(data,ordID){
    var x= ordersData.findIndex((ord) => {
      return(ord.ordID === ordID)
    });

    if(x < 0) return -1;

    ordersData[x].ordProvision = data;

    return 1;
  }

  //add New Parameter
  addNewParameter(data,ordID){
    var x= ordersData.findIndex((ord) => {
      return(ord.ordID === ordID)
    });

    if(x < 0) return -1;

    ordersData[x].ordParameter = data;

    return 1;
  }

  //add New Contact
  addNewContact(data,ordID){
    var x= ordersData.findIndex((ord) =>{
      return(ord.ordID === ordID)
    });
    if (x < 0) return -1;

    ordersData[x].ordContact.push(data);

    return 1;
  }

  //add New Agent
  addNewAgent(data,ordID){
    var x= ordersData.findIndex((ord) =>{
      return(ord.ordID === ordID)
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
      return(ord.ordID === ordID)
    });
    if (x < 0) return -1;

    ordersData[x].ordAccountProfile = data;

    return 1;
  }

  editPaymentDetail(data,ordID){
    var x= ordersData.findIndex((ord) =>{
      return(ord.ordID === ordID)
    });
    if (x < 0) return -1;

    ordersData[x].ordPaymentDetail = data;

    return 1;
  }

  //add New Order
  addNewOrder(data,ordID){
    var x= ordersData.findIndex((ord) =>{
      return(ord.ordID === ordID)
    });
    if (x < 0) return -1;

    ordersData[x].ordNewOrder = data;

    return 1;
  }

  //edit Contract Iamge Modal
  addContractImage(data,ordID){
    var x= ordersData.findIndex((ord) =>{
      return(ord.ordID === ordID)
    });
    if (x < 0) return -1;

    ordersData[x].ordContractImage = data;

    return 1;
  }

  addNewImageFile(data,ordID){
    var x= ordersData.findIndex((ord) =>{
      return(ord.ordID === ordID)
    });
    if (x < 0) return -1;

    ordersData[x].ordContractImage.files = data;

    return 1;
  }
}
