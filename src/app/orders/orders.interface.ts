export interface orders{
  ordID : number;
  orgID : number;
  ordContractTerm : orderContractTerm;
  ordCatalog : orderCatalog;
  ordParameter : orderParameter;
  ordContact : Array<orderContact>;
  ordAgent : Array<orderAgent>;
  ordProvision : orderProvision;
  ordAccountProfile : orderAccountProfile;
  ordNewOrder : orderNewOrder;
  ordPaymentDetail : orderPaymentDetail;
  ordContractImage : orderContractImage;
  ordPoNumber : Array<orderPoNumber>;
}

export interface orderContractTerm{
  subscriptionName : string;
  contractSignDate : string;
  expectedStartDate : string;
  purpose : string;
  renewalContract : string;
}

export interface orderCatalog{
  currentSelectedOffer : string;
}

export interface orderParameter{
  offerCheckBox  : boolean;
  offerInitialTermQty : number;
  offerRenewalTermQty : number;
  offerPrepayTermQty : string;
  numberOfFreeMonthsQty : number;
  offerName : string;
  serviceSetupCheckBox : boolean;
  brandingCheckBox : boolean;
  brandingFeeEstPrice : number;
  brandingFeeCheckBox : boolean;
  primaryLanguageCheckBox : boolean;
  primaryLanguage : string;
  meetingAssistCheckBox : boolean;
  meetingAssistUnitPrice : string;
  additionalHoursCheckBox : boolean;
  additionalHoursUnitPrice : string;
  recordingCheckBox : boolean;
  recordingUnitPrice : string;
  moCommittedType : string;
  moCommitmentQty : string;
  moCommitmentUnitPrice : string;
  opChangeUSDCheckBox : boolean;
  psoUSDCheckBox : boolean;
  additionalStorageCheckBox : boolean;
  nbrStorageCheckBox : boolean;
  includedFreeStorageQty : string;
  committedMonthlyStorageQty : string;
  committedMonthlyStorageUnitPrice : string;
  overageCheckBox : boolean;
  overageUnitPrice : string;
  reportingUSDCheckBox : boolean;
  optionUSDCheckBox : boolean;
}

export interface orderProvision{
  services : string;
  language : string;
  webExURL : string;
  timeZone : string;
  brandingSiteReference : number;
}

export interface orderContact{
  contactType : string,
  individualName : string,
  firstName : string;
  lastName : string;
  title : string;
  jobFunction : string;
  department : string;
  email : string;
  workPhone : number;
  homePhone : number;
  cellPhone : number;
  fax : number;
  reportsTo : string;
  marketingProject : string;
  referredBy : string;
  address1 : string;
  address2 : string;
  city : string;
  state : string;
  country : string;
  zip : number;
  notes : string;
}

export interface orderAgent{
  initialSalesRep : string;
  currentOwner : string;
  csm : string;
  salesEngineer : string;
  salesAccess : string;
  collector : string;
}

export interface orderAccountProfile{
  primarySalesRep : string;
  teamName : string;
  industry : string;
  totalEmployees : number;
  estAnnualSales : number;
  knowledgeWorkers : number;
  companyDescription : string;
  businessHour : string;
  businessTimeZone : string;
  desktopOperatingSystemCur  : string;
  desktopOperatingSystemFut :string;
  serverOperatingSystemCur : string;
  serverOperatingSystemFut : string;
  routingCur : string;
  routingFut : string;
  emailCur : string;
  emailFut : string;
  webCollaborationApplicationCur : string;
  webCollaborationApplicationFut : string;
  businessIMCur : string;
  businessIMFut : string;
  telephonyInternalCur : string;
  telephonyInternalFut : string;
  telephonyExternalCur : string;
  telephonyExternalFut :string;
  systemsManagementCur : string;
  systemsManagementFut : string;
  helpDeskCur : string;
  helpDeskFut : string;
  businessContinuanceCur : string;
  businessContinuanceFut : string;
  lmsCur : string;
  lmsFut : string;
  lcmsCur : string;
  lcmsFut : string;
  contentAuthoringCur : string;
  contentAuthoringFut : string;
  marketingAutomationCur : string;
  marketingAutomationFut : string;
  broadcastingCur : string;
  broadcastingFut : string;
  salesDeptApplicationCur :string;
  salesDeptApplicationFut : string;
  projectManagementApplicationCur : string;
  projectManagementApplicationFut : string;
  initialWebExUsers : number;
  corporateInternalMeeting : boolean;
  internalTraining : boolean;
  externalTraining :boolean;
  pressAnalystBriefing : boolean;
  salesDemos : boolean;
  other : boolean;
  externalTechnicalSupport : boolean;
  internalTechnicalSupport : boolean;
  largeMeeting : boolean;
  projectManagement : boolean;
  webminar : boolean;
  informationNotAvailable : boolean;
  departmentSelectingWebEx : string;
  primaryDepartment : string;
  customerServiceExternal : boolean;
  engineeringRD : boolean;
  humanResources : boolean;
  legal : boolean;
  sales : boolean;
  trainingInternal : boolean;
  prInvestorsRelation : boolean;
  operation : boolean;
  supportInternal : boolean;
  accountingFinance : boolean;
  itMis : boolean;
  marketing : boolean;
  trainingExternal : boolean;
  companyWide : boolean;
  manufacturing : boolean;
  executiveManagement : boolean;
  businessDevelopment : boolean;
  other1 : boolean;
  informationNotAvailable1 : boolean;
}

export interface orderNewOrder{
  accountName : string;
  orgName : string;
  exchangeRate : string;
  exchangeRateDate : string;
  comments : string;
  primarySR1 : string;
  primarySR2 : string;
  primarySR3 : string;
  primarySR4 : string;
  secondSR1 : string;
  secondSR2 : string;
  secondSR3 : string;
  secondSR4 : string;
  thirdSR1 : string;
  thirdSR2 : string;
  thirdSR3 : string;
  thirdSR4 : string;
  CSM1 : string;
  CSM2 : string;
  CSM3 : string;
  CSM4 : string;
  sfdfDealNumber : number;
}

export interface orderPaymentDetail{
  paymentMethod : string;
  creditCard : string;
  creditCardNumber : string;
  expirationDateMonth : number;
  expirationDateYear : number;
  nameInCard : string;
  cardSecurityCode : string;
}

export interface orderContractImage{
  serviceConfiguration : string;
  files : Array<string>;
  imageName : string;
  imageDescription : string;
}

export interface orderPoNumber{
  poNumber : number;
  description : string;
}
