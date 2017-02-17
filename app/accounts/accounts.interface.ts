export interface account{
    orgID : number;
    accDetails : accountDetails;
    accAddress : Array<accountAddress>;
    accContacts : accountContacts;
    accAgents : accountAgents;
}
export interface accountDetails{
        orgName: string;
        accName: string;
        billingMethod: string;
        billingFrequency: string;
        paymentMethod: string;
        paymentTerm: string;
        currency: string;
        accType: string;
        link: string;
        accStatus: string;
        billDay: string;
        mrr: string;
        activeOn: string;
}
export interface accountAddress{
    country : string;
    street1 : string;
    street2 : string;
    city : string;
    state : string;
    zip : number;
    phone : number;
    fax : number;
}

export interface accountContacts{
    firstName : string;
    lastName : string;
    title : string;
    jobFunction : string;
    department : string;
    email : string;
    workPhone : string;
}

export interface accountAgents{
    initialSalesRep : string;
    currentOwner : string;
    csm : string;
    salesEngineer : string;
    salesAccess : string;
    collector : string;
}

