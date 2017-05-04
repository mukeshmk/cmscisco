import { Component, OnInit } from '@angular/core';
import {OrdersService} from "../orders.service";
import {Validators, FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {orderParameter, orders, orderContractTerm, orderContact, orderProvision, orderAccountProfile,
  orderNewOrder, orderAgent, orderPaymentDetail, orderContractImage} from "../orders.interface";


declare var jQuery : any;


@Component({
  selector: 'app-orders-new',
  templateUrl: 'orders-new.component.html',
  styleUrls: ['orders-new.component.css'],
  providers: [OrdersService]

})
export class OrdersNewComponent implements OnInit {

  orderID : number;
  data : orders;
  //contactID :   number;
  //x : number;
  ordParameterData : orderParameter;
  ordProvisionData : orderProvision;
  ordContractData : orderContractTerm;
  ordAccountProfileData : orderAccountProfile;
  ordContactData : orderContact;
  ordAgentData : orderAgent;
  ordPaymentDetailData : orderPaymentDetail;
  ordNewOrderData : orderNewOrder;
  ordContractImageData : orderContractImage;
  ordImageFiles : Array<string>;
  orderNewContractFormGroup : FormGroup;
  orderNewOrderCatalogFormGroup : FormGroup;
  orderNewContactFormGroup : FormGroup;
  orderNewAgentFormGroup : FormGroup;
  orderNewParameterFormGroup : FormGroup;
  orderNewProvisionFormGroup : FormGroup;
  orderNewAccountProfileFormGroup : FormGroup;
  orderEditAccountProfileFormGroup :FormGroup;
  orderNewOrderFormGroup : FormGroup;
  orderSummaryFormGroup : FormGroup;
  orderPaymentDetailFormGroup : FormGroup;
  orderContractImageFormGroup : FormGroup;
  orderPoNumberFormGroup : FormGroup;
  orderNewContractFormVariable : boolean;
  orderNewCatalogFormVariable : boolean;
  orderSkuList : boolean;
  orderNewProvisionFormVariable : boolean;
  orderNewParameterFormVariable : boolean;
  orderNewAccountProfileFormVariable : boolean;
  orderNewOrderFormVariable : boolean;
  orderSummaryFormVariable : boolean;
  orderManagePoFormVariable : boolean;


  constructor(private route : ActivatedRoute,public _fb : FormBuilder, public _ordersService : OrdersService) {
    this.route.params.subscribe((params) => {
      this.orderID = params['ordID'];
    });
    console.log("order",this.orderID);
  }

  ngOnInit() {
    this.data=this._ordersService.getOrdersDataByOrgName(this.orderID);
    console.log(this.data);
    this.orderNewContractFormVariable = true;
    this.orderNewCatalogFormVariable = false;
    this.orderSkuList = false;
    this.orderNewParameterFormVariable = false;
    this.orderNewProvisionFormVariable = false;
    this.orderNewAccountProfileFormVariable = false;
    this.orderNewOrderFormVariable = false;
    this.orderSummaryFormVariable = false;
    this.orderManagePoFormVariable = false;


    this.orderNewContractFormGroup = this._fb.group(
      {
        subscriptionName : ['',Validators.required],
        contractSignDate : ['',Validators.required],
        expectedStartDate : ['',Validators.required],
        purpose : ['',Validators.required],
        renewalContract : ['',Validators.required]
      }
    );

    this.orderNewOrderCatalogFormGroup = this._fb.group(
      {
        currentSelectedOffer :  ['',Validators.required]
      }
    );

    this.orderNewParameterFormGroup = this._fb.group(
      {
        offerCheckBox  : ['',Validators.required],
        offerInitialTermQty : ['',Validators.required],
        offerRenewalTermQty : ['',Validators.required],
        offerPrepayTermQty : ['',Validators.required],
        numberOfFreeMonthsQty : ['',Validators.required],
        offerName : ['',Validators.required],
        serviceSetupCheckBox : ['',Validators.required],
        brandingCheckBox : ['',Validators.required],
        brandingFeeEstPrice : ['',Validators.required],
        brandingFeeCheckBox : ['',Validators.required],
        primaryLanguageCheckBox : ['',Validators.required],
        primaryLanguage : ['',Validators.required],
        meetingAssistCheckBox : ['',Validators.required],
        meetingAssistUnitPrice : ['',Validators.required],
        additionalHoursCheckBox : ['',Validators.required],
        additionalHoursUnitPrice : ['',Validators.required],
        recordingCheckBox : ['',Validators.required],
        recordingUnitPrice : ['',Validators.required],
        moCommittedType : ['',Validators.required],
        moCommitmentQty : ['',Validators.required],
        moCommitmentUnitPrice : ['',Validators.required],
        opChangeUSDCheckBox : ['',Validators.required],
        psoUSDCheckBox : ['',Validators.required],
        additionalStorageCheckBox : ['',Validators.required],
        nbrStorageCheckBox : ['',Validators.required],
        includedFreeStorageQty : ['',Validators.required],
        committedMonthlyStorageQty : ['',Validators.required],
        committedMonthlyStorageUnitPrice : ['',Validators.required],
        overageCheckBox : ['',Validators.required],
        overageUnitPrice : ['',Validators.required],
        reportingUSDCheckBox : ['',Validators.required],
        optionUSDCheckBox : ['',Validators.required]
      }
    );

    this.orderNewProvisionFormGroup = this._fb.group(
      {
        services : ['',Validators.required],
        language : ['',Validators.required],
        webExURL : ['',Validators.required],
        timeZone : ['',Validators.required],
        brandingSiteReference :['',Validators.required]
      }
    );

    this.orderNewContactFormGroup = this._fb.group(
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
        homePhone : ['',Validators.required],
        cellPhone : ['',Validators.required],
        fax : ['',Validators.required],
        reportsTo : ['',Validators.required],
        marketingProject :['',Validators.required],
        referredBy : ['',Validators.required],
        address1 : ['',Validators.required],
        address2 : ['',Validators.required],
        city : ['',Validators.required],
        state : ['',Validators.required],
        country : ['',Validators.required],
        zip : ['',Validators.required],
        notes : ['',Validators.required]
      }
    );

    this.orderPaymentDetailFormGroup = this._fb.group(
      {
        paymentMethod : ['',Validators.required],
        creditCard : ['',Validators.required],
        creditCardNumber : ['',Validators.required],
        expirationDateMonth : ['',Validators.required],
        expirationDateYear : ['',Validators.required],
        nameInCard : ['',Validators.required],
        cardSecurityCode : ['',Validators.required],
      }
    );

    this.orderNewAgentFormGroup = this._fb.group(
      {
        initialSalesRep : ['',Validators.required],
        currentOwner :['',Validators.required],
        csm : ['',Validators.required],
        salesEngineer : ['',Validators.required],
        salesAccess : ['',Validators.required],
        collector : ['',Validators.required]
      }
    );

    this.orderNewAccountProfileFormGroup = this._fb.group(
      {
        primarySalesRep : ['',Validators.required],
        teamName : ['',Validators.required],
        industry : ['',Validators.required],
        totalEmployees : ['',Validators.required],
        estAnnualSales : ['',Validators.required],
        knowledgeWorkers : ['',Validators.required],
        companyDescription : ['',Validators.required],
        businessHour : ['',Validators.required],
        businessTimeZone : ['',Validators.required],
        desktopOperatingSystemCur : ['',Validators.required],
        desktopOperatingSystemFut : ['',Validators.required],
        serverOperatingSystemCur : ['',Validators.required],
        serverOperatingSystemFut : ['',Validators.required],
        routingCur : ['',Validators.required],
        routingFut : ['',Validators.required],
        emailCur : ['',Validators.required],
        emailFut : ['',Validators.required],
        webCollaborationApplicationCur : ['',Validators.required],
        webCollaborationApplicationFut : ['',Validators.required],
        businessIMCur : ['',Validators.required],
        businessIMFut : ['',Validators.required],
        telephonyInternalCur: ['',Validators.required],
        telephonyInternalFut : ['',Validators.required],
        telephonyExternalCur : ['',Validators.required],
        telephonyExternalFut : ['',Validators.required],
        systemsManagementCur : ['',Validators.required],
        systemsManagementFut : ['',Validators.required],
        helpDeskCur : ['',Validators.required],
        helpDeskFut : ['',Validators.required],
        businessContinuanceCur : ['',Validators.required],
        businessContinuanceFut : ['',Validators.required],
        lmsCur : ['',Validators.required],
        lmsFut : ['',Validators.required],
        lcmsCur : ['',Validators.required],
        lcmsFut : ['',Validators.required],
        contentAuthoringCur : ['',Validators.required],
        contentAuthoringFut : ['',Validators.required],
        marketingAutomationCur : ['',Validators.required],
        marketingAutomationFut :['',Validators.required],
        broadcastingCur : ['',Validators.required],
        broadcastingFut : ['',Validators.required],
        salesDeptApplicationCur : ['',Validators.required],
        salesDeptApplicationFut : ['',Validators.required],
        projectManagementApplicationCur : ['',Validators.required],
        projectManagementApplicationFut : ['',Validators.required],
        initialWebExUsers : ['',Validators.required],
        corporateInternalMeeting : ['',Validators.required],
        internalTraining : ['',Validators.required],
        externalTraining : ['',Validators.required],
        pressAnalystBriefing : ['',Validators.required],
        salesDemos : ['',Validators.required],
        other : ['',Validators.required],
        externalTechnicalSupport : ['',Validators.required],
        internalTechnicalSupport : ['',Validators.required],
        largeMeeting : ['',Validators.required],
        projectManagement : ['',Validators.required],
        webminar : ['',Validators.required],
        informationNotAvailable : ['',Validators.required],
        departmentSelectingWebEx : ['',Validators.required],
        primaryDepartment : ['',Validators.required],
        customerServiceExternal : ['',Validators.required],
        engineeringRD : ['',Validators.required],
        humanResources : ['',Validators.required],
        legal : ['',Validators.required],
        sales : ['',Validators.required],
        trainingInternal : ['',Validators.required],
        prInvestorsRelation : ['',Validators.required],
        operation : ['',Validators.required],
        supportInternal : ['',Validators.required],
        accountingFinance : ['',Validators.required],
        itMis : ['',Validators.required],
        marketing : ['',Validators.required],
        trainingExternal : ['',Validators.required],
        companyWide : ['',Validators.required],
        manufacturing : ['',Validators.required],
        executiveManagement : ['',Validators.required],
        businessDevelopment : ['',Validators.required],
        other1 : ['',Validators.required],
        informationNotAvailable1 : ['',Validators.required]
      }
    );

    this.orderEditAccountProfileFormGroup = this._fb.group(
      {
        primarySalesRep : ['',Validators.required],
        teamName : ['',Validators.required],
        industry : ['',Validators.required],
        totalEmployees : ['',Validators.required],
        estAnnualSales : ['',Validators.required],
        knowledgeWorkers : ['',Validators.required],
        companyDescription : ['',Validators.required],
        businessHour : ['',Validators.required],
        businessTimeZone : ['',Validators.required],
        desktopOperatingSystemCur : ['',Validators.required],
        desktopOperatingSystemFut : ['',Validators.required],
        serverOperatingSystemCur : ['',Validators.required],
        serverOperatingSystemFut : ['',Validators.required],
        routingCur : ['',Validators.required],
        routingFut : ['',Validators.required],
        emailCur : ['',Validators.required],
        emailFut : ['',Validators.required],
        webCollaborationApplicationCur : ['',Validators.required],
        webCollaborationApplicationFut : ['',Validators.required],
        businessIMCur : ['',Validators.required],
        businessIMFut : ['',Validators.required],
        telephonyInternalCur: ['',Validators.required],
        telephonyInternalFut : ['',Validators.required],
        telephonyExternalCur : ['',Validators.required],
        telephonyExternalFut : ['',Validators.required],
        systemsManagementCur : ['',Validators.required],
        systemsManagementFut : ['',Validators.required],
        helpDeskCur : ['',Validators.required],
        helpDeskFut : ['',Validators.required],
        businessContinuanceCur : ['',Validators.required],
        businessContinuanceFut : ['',Validators.required],
        lmsCur : ['',Validators.required],
        lmsFut : ['',Validators.required],
        lcmsCur : ['',Validators.required],
        lcmsFut : ['',Validators.required],
        contentAuthoringCur : ['',Validators.required],
        contentAuthoringFut : ['',Validators.required],
        marketingAutomationCur : ['',Validators.required],
        marketingAutomationFut :['',Validators.required],
        broadcastingCur : ['',Validators.required],
        broadcastingFut : ['',Validators.required],
        salesDeptApplicationCur : ['',Validators.required],
        salesDeptApplicationFut : ['',Validators.required],
        projectManagementApplicationCur : ['',Validators.required],
        projectManagementApplicationFut : ['',Validators.required],
        initialWebExUsers : ['',Validators.required],
        corporateInternalMeeting : ['',Validators.required],
        internalTraining : ['',Validators.required],
        externalTraining : ['',Validators.required],
        pressAnalystBriefing : ['',Validators.required],
        salesDemos : ['',Validators.required],
        other : ['',Validators.required],
        externalTechnicalSupport : ['',Validators.required],
        internalTechnicalSupport : ['',Validators.required],
        largeMeeting : ['',Validators.required],
        projectManagement : ['',Validators.required],
        webminar : ['',Validators.required],
        informationNotAvailable : ['',Validators.required],
        departmentSelectingWebEx : ['',Validators.required],
        primaryDepartment : ['',Validators.required],
        customerServiceExternal : ['',Validators.required],
        engineeringRD : ['',Validators.required],
        humanResources : ['',Validators.required],
        legal : ['',Validators.required],
        sales : ['',Validators.required],
        trainingInternal : ['',Validators.required],
        prInvestorsRelation : ['',Validators.required],
        operation : ['',Validators.required],
        supportInternal : ['',Validators.required],
        accountingFinance : ['',Validators.required],
        itMis : ['',Validators.required],
        marketing : ['',Validators.required],
        trainingExternal : ['',Validators.required],
        companyWide : ['',Validators.required],
        manufacturing : ['',Validators.required],
        executiveManagement : ['',Validators.required],
        businessDevelopment : ['',Validators.required],
        other1 : ['',Validators.required],
        informationNotAvailable1 : ['',Validators.required]
      }
    );

    this.orderNewOrderFormGroup = this._fb.group(
      {
        accountName : ['',Validators.required],
        orgName : ['',Validators.required],
        exchangeRate : ['',Validators.required],
        exchangeRateDate : ['',Validators.required],
        comments : ['',Validators.required],
        primarySR1 : ['',Validators.required],
        primarySR2 : ['',Validators.required],
        primarySR3 : ['',Validators.required],
        primarySR4 : ['',Validators.required],
        secondSR1 : ['',Validators.required],
        secondSR2 : ['',Validators.required],
        secondSR3 : ['',Validators.required],
        secondSR4 : ['',Validators.required],
        thirdSR1 : ['',Validators.required],
        thirdSR2 : ['',Validators.required],
        thirdSR3 : ['',Validators.required],
        thirdSR4 : ['',Validators.required],
        CSM1 : ['',Validators.required],
        CSM2  : ['',Validators.required],
        CSM3 : ['',Validators.required],
        CSM4 : ['',Validators.required],
        sfdfDealNumber : ['',Validators.required]
      }
    );

    this.orderSummaryFormGroup = this._fb.group(
      {
        accountName : ['',Validators.required],
        organizationName : ['',Validators.required],
        accountId : ['',Validators.required],
        organizationType : ['',Validators.required],
        paymentTerm : ['',Validators.required],
        orderStatus : ['',Validators.required],
        sellType : ['',Validators.required],
        preOrderDetails  : ['',Validators.required],
        orderType : ['',Validators.required],
        postOrderDetails : ['',Validators.required],
        creationDate : ['',Validators.required],
        currency : ['',Validators.required],
        exchangeRateDate : ['',Validators.required],
        exchangeRate : ['',Validators.required],
        cmtOwner : ['',Validators.required],
        mrr : ['',Validators.required],
        createdBy : ['',Validators.required],
        upsellReasonCode : ['',Validators.required],
        sfdfDealNo : ['',Validators.required],
        primarySR1 : ['',Validators.required],
        primarySR2 : ['',Validators.required],
        primarySR3 : ['',Validators.required],
        primarySR4 : ['',Validators.required],
        secondSR1 : ['',Validators.required],
        secondSR2 : ['',Validators.required],
        secondSR3 : ['',Validators.required],
        secondSR4 : ['',Validators.required],
        thirdSR1 : ['',Validators.required],
        thirdSR2 : ['',Validators.required],
        thirdSR3 : ['',Validators.required],
        thirdSR4 : ['',Validators.required],
        CSM1 : ['',Validators.required],
        CSM2 : ['',Validators.required],
        CSM3 : ['',Validators.required],
        CSM4 : ['',Validators.required]
      }
    );

    this.orderContractImageFormGroup = this._fb.group(
      {
        serviceConfiguration : ['',Validators.required],
        files : ['',Validators.required],
        imageName : ['',Validators.required],
        imageDescription : ['',Validators.required]
      }
    );

    this.orderPoNumberFormGroup = this._fb.group(
      {
        poNumber : ['',Validators.required],
        description : ['',Validators.required]
      }
    );

  }

  saveOrderNewContractForm(data){
    this.ordContractData = this.orderNewContractFormGroup.value;
    this._ordersService.addContractNewTerms(this.ordContractData,this.orderID);
    console.log(this.ordContractData);
    this.orderNewContractFormVariable = false;
    this.orderNewCatalogFormVariable = true;
  }

  saveOrderNewCatalogForm(data){
    this.orderNewCatalogFormVariable = false;
    this.orderNewParameterFormVariable = true;
  }

  viewSkuList(){
    this.orderSkuList = true;
    console.log(this.orderSkuList);
  }

  saveOrderNewParameterForm(data){
    this.ordParameterData = this.orderNewParameterFormGroup.value;
    this._ordersService.addNewParameter(this.ordParameterData,this.orderID);
    console.log(this.ordParameterData);
    this.orderNewParameterFormVariable = false;
    this.orderNewProvisionFormVariable = true;
  }

  saveOrderNewProvisionForm(data){
    this.ordProvisionData = this.orderNewProvisionFormGroup.value;
    console.log(this.ordProvisionData);
    this._ordersService.addNewProvision(this.ordProvisionData,this.orderID);
    this.orderNewProvisionFormVariable = false;
    this.orderNewAccountProfileFormVariable = true;
  }

  saveOrderContact(data){
    this.ordContactData = this.orderNewContactFormGroup.value;
    console.log(this.ordContactData);
    this._ordersService.addNewContact(this.ordContactData,this.orderID);
    jQuery('#newContactModal').modal('hide');
  }

  saveOrderAgent(data){
    this.ordAgentData = this.orderNewAgentFormGroup.value;
    console.log(this.ordAgentData);
    this._ordersService.addNewAgent(this.ordAgentData,this.orderID);
    jQuery('#newAgentModal').modal('hide');
  }

  /*editOrderContact(data,id){
   this.ordContactData = this.orderNewContactFormGroup.value;
   this.contactID = id;
   console.log(this.ordContactData);
   this._ordersService.editContact(this.ordContactData,this.organizationID,this.contactID);
   }*/


  viewNewContactModal(){
    jQuery('#newContactModal').modal('show');
  }

  viewNewAgentModal(){
    jQuery('#newAgentModal').modal('show');
  }

  /*viewEditContactModal(x){
   this.x = x;
   console.log(this.x);
   jQuery('#editContactModal').modal('show');
   }*/

  viewEditAccountProfile(){
    jQuery('#editAccountProfile').modal('show');
  }

  viewEditPaymentDetailModal(){
    jQuery('#editPaymentMethod').modal('show');
  }

  saveOrderAccountProfile(data){
    this.ordAccountProfileData= this.orderNewAccountProfileFormGroup.value;
    console.log(this.ordAccountProfileData);
    this._ordersService.addNewAccountProfile(this.ordAccountProfileData,this.orderID);
    this.orderNewAccountProfileFormVariable = false;
    this.orderNewOrderFormVariable = true;
  }

  saveOrderEditAccountProfile(data) {
    this.ordAccountProfileData = this.orderEditAccountProfileFormGroup.value;
    console.log(this.ordAccountProfileData);
    this._ordersService.addNewAccountProfile(this.ordAccountProfileData, this.orderID);
    jQuery('#editAccountProfile').modal('hide');
  }

  saveOrderEditPaymentDetail(data){
    this.ordPaymentDetailData = this.orderPaymentDetailFormGroup.value;
    console.log(this.ordPaymentDetailData);
    this._ordersService.editPaymentDetail(this.ordPaymentDetailData, this.orderID);
    jQuery('#editPaymentMethod').modal('hide');
  }

  saveNewOrder(data){
    this.ordNewOrderData = this.orderNewOrderFormGroup.value;
    console.log(this.ordNewOrderData);
    this._ordersService.addNewOrder(this.ordNewOrderData,this.orderID);
    this.orderNewOrderFormVariable = false;
    this.orderSummaryFormVariable = true;
  }

  saveOrderSummary(data){
    this.orderSummaryFormVariable = false;
  }

  viewImageContractModal(){
    jQuery('#contractImageModal').modal('show');
  }

  saveContractImage(data){
    this.ordContractImageData = this.orderContractImageFormGroup.value;
    console.log(this.ordContractImageData);
    this._ordersService.addContractImage(this.ordContractImageData,this.orderID);
    jQuery('#contractImageModal').modal('hide');
  }

  saveImageFile(data){
    this.ordImageFiles = data;
    this._ordersService.addNewImageFile(this.ordImageFiles,this.orderID);
    console.log(this.ordImageFiles);
  }

  viewManagePoNumber(){
    jQuery('#managePoNumberModal').modal({
      observeChanges : true
    }).modal('show');
  }

  setNewPoNumber(){
    this.orderManagePoFormVariable = true;
  }

  hideManagePoNumberModal(){
    jQuery('#managePoNumberModal').modal('hide');
    this.orderManagePoFormVariable =false;
  }


  /* viewOfferAccordion(){
   jQuery('#offerAccordion').accordion({
   closeNested : true}).accordion('toggle');

   jQuery('#businessAccordion').accordion('toggle');

   }*/


}
