export interface organization{
  orgID : number;
  orgCompanyInfo : companyInfo;
  orgAddress : Array<address>;
  orgContactBilling : Array<contactBilling>;
  orgContactBusiness : Array<contactBusiness>;
  orgAgents : Array<agents>;
}

export interface companyInfo{
  orgName : string;
  upo : string;
  sfdfDealID : string;
  language : string;
  customerURL : string;
  industry : string;
  estAnnualRevSales : number;
  estNumberOfEmployees : number;
  parentOrg : string;
  companyURL : string;
  lastModified : string;
  status : string;
}

export interface address{
  addressTypeMapping : string;
  addressList : string;
  country : string;
  street1 : string;
  street2: string;
  city : string;
  state : string;
  zip : number;
  phone : number;
  fax : number;
}

export interface contactBilling{
  contactType : string;
  individualName : string;
  firstName : string;
  lastName :string;
  title :string;
  jobFunction : string;
  department : string;
  email : string;
  workPhone : number;
  homePhoneBilling : number;
  cellPhoneBilling : number;
  faxBilling : number;
  reportsToBilling : string;
  marketingProjectBilling : string;
  referredByBilling : string;
  street1Billing : string;
  street2Billing : string;
  cityBilling : string;
  stateBilling : string;
  zipBilling : number;
  notesBilling : string;
}

export interface contactBusiness{
  firstNameBusiness : string;
  lastNameBusiness :string;
  titleBusiness :string;
  jobFunctionBusiness : string;
  departmentBusiness : string;
  emailBusiness : string;
  workPhoneBusiness : number;
}

export interface agents{
  initialSR : string;
  currentOwner : string;
  salesEngineer : string;
  salesAccess :string;
}

