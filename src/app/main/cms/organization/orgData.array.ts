import {
  organization, companyInfo, address, contactBilling, contactBusiness, agents
} from "./oragnization.interface";

export let organizationCompanyInfoData : Array<companyInfo> = [
  {
    orgName : 'pb456ty',
    upo : 'fbg',
    sfdfDealID : 'fty',
    language : 'English',
    customerURL : 'ytyh@gmail.com',
    industry : 'nash',
    estAnnualRevSales : 567,
    estNumberOfEmployees : 6789,
    parentOrg : 'apple',
    companyURL : 'a@fmail.com',
    lastModified : '1-12-10',
    status : 'Active'
  },
  {
    orgName : 'ey67a',
    upo : 'fbg',
    sfdfDealID : 'fty',
    language : 'English',
    customerURL : 'ytyh@gmail.com',
    industry : 'nash',
    estAnnualRevSales : 567,
    estNumberOfEmployees : 6789,
    parentOrg : 'orange',
    companyURL : 'a@fmail.com',
    lastModified : '1-12-10',
    status : 'Pending'
  },
  {
    orgName : 'mjkj8nj',
    upo : 'fbg',
    sfdfDealID : 'fty',
    language : 'English',
    customerURL : 'ytyh@gmail.com',
    industry : 'nash',
    estAnnualRevSales : 567,
    estNumberOfEmployees : 6789,
    parentOrg : 'tesla',
    companyURL : 'a@fmail.com',
    lastModified : '1-12-10',
    status : 'Active'
  }
];

export let organizationAddressData : Array<Array<address>> = [
  [
    {
      addressTypeMapping : 'organization',
      addressList : 'org',
      country : 'Algeria',
      street1 : 'sdfgh',
      street2 : 'sdfgh',
      city:'sdfgh',
      state:'sdfgh',
      zip:234567,
      fax : 78090,
      phone :67790458
    },
    {
      addressTypeMapping : 'organization',
      addressList : 'org',
      country : 'Nigeria',
      street1 : 'sdfgh',
      street2 : 'sdfgh',
      city:'sdfgh',
      state:'sdfgh',
      zip:234567,
      fax : 78090,
      phone :67790458
    }
  ],
  [
    {
      addressTypeMapping : 'organization',
      addressList : 'org',
      country : 'Canada',
      street1 : 'sdfgh',
      street2 : 'sdfgh',
      city:'sdfgh',
      state:'sdfgh',
      zip:234567,
      fax : 78090,
      phone :6779045
    },
    {
      addressTypeMapping : 'organization',
      addressList : 'org',
      country : 'India',
      street1 : 'sdfgh',
      street2 : 'sdfgh',
      city:'sdfgh',
      state:'sdfgh',
      zip:234567,
      fax : 78090,
      phone :67790458
    }
  ],
  [
    {
      addressTypeMapping : 'organization',
      addressList : 'org',
      country : 'China',
      street1 : 'sdfgh',
      street2 : 'sdfgh',
      city:'sdfgh',
      state:'sdfgh',
      zip:234567,
      fax : 78090,
      phone :67790458
    },
    {
      addressTypeMapping : 'organization',
      addressList : 'org',
      country : 'India',
      street1 : 'sdfgh',
      street2 : 'sdfgh',
      city:'sdfgh',
      state:'sdfgh',
      zip:234567,
      fax : 78090,
      phone :67790458
    }
  ]
];

export let organizationContactBillingData : Array<Array<contactBilling>> = [
  [
    {
      contactType : 'billing',
      individualName : 'fth',
      firstName : 'Sasha',
      lastName : 'Sanam',
      title : 'Sales Rep',
      jobFunction : 'Engineer',
      department : 'Sales',
      email : 'jgyfhs@umail.com',
      workPhone : 67809,
      homePhoneBilling : 5678,
      cellPhoneBilling : 678,
      faxBilling : 5678,
      reportsToBilling : 'rgfb',
      marketingProjectBilling : 'gghj',
      referredByBilling : 'efsd',
      street1Billing : 'esfd',
      street2Billing : 'ewad',
      cityBilling : 'wefds',
      stateBilling : 'qwas',
      zipBilling : 567,
      notesBilling : 'fdgh'
    },
    {
      contactType : 'billing',
      individualName : 'fth',
      firstName : 'Sriya',
      lastName : 'Sanam',
      title : 'Sales Rep',
      jobFunction : 'Engineer',
      department : 'Sales',
      email : 'jgyfhs@umail.com',
      workPhone : 67809,
      homePhoneBilling : 5678,
      cellPhoneBilling : 678,
      faxBilling : 5678,
      reportsToBilling : 'rgfb',
      marketingProjectBilling : 'gghj',
      referredByBilling : 'efsd',
      street1Billing : 'esfd',
      street2Billing : 'ewad',
      cityBilling : 'wefds',
      stateBilling : 'qwas',
      zipBilling : 567,
      notesBilling : 'fdgh'
    }
  ],
  [
    {
      contactType : 'billing',
      individualName : 'fth',
      firstName : 'Blinky',
      lastName : 'Bloom',
      title : 'Sales Rep',
      jobFunction : 'Engineer',
      department : 'Sales',
      email : 'jgyfhs@umail.com',
      workPhone : 67809,
      homePhoneBilling : 5678,
      cellPhoneBilling : 678,
      faxBilling : 5678,
      reportsToBilling : 'rgfb',
      marketingProjectBilling : 'gghj',
      referredByBilling : 'efsd',
      street1Billing : 'esfd',
      street2Billing : 'ewad',
      cityBilling : 'wefds',
      stateBilling : 'qwas',
      zipBilling : 567,
      notesBilling : 'fdgh'
    },
    {
      contactType : 'billing',
      individualName : 'fth',
      firstName : 'Buttercups',
      lastName : '',
      title : 'Sales Rep',
      jobFunction : 'Engineer',
      department : 'Sales',
      email : 'jgyfhs@umail.com',
      workPhone : 67809,
      homePhoneBilling : 5678,
      cellPhoneBilling : 678,
      faxBilling : 5678,
      reportsToBilling : 'rgfb',
      marketingProjectBilling : 'gghj',
      referredByBilling : 'efsd',
      street1Billing : 'esfd',
      street2Billing : 'ewad',
      cityBilling : 'wefds',
      stateBilling : 'qwas',
      zipBilling : 567,
      notesBilling : 'fdgh'
    }
  ],
  [
    {
      contactType : 'billing',
      individualName : 'fth',
      firstName : 'Blossoms',
      lastName : 'Gertrude',
      title : 'Sales Rep',
      jobFunction : 'Engineer',
      department : 'Sales',
      email : 'jgyfhs@umail.com',
      workPhone : 67809,
      homePhoneBilling : 5678,
      cellPhoneBilling : 678,
      faxBilling : 5678,
      reportsToBilling : 'rgfb',
      marketingProjectBilling : 'gghj',
      referredByBilling : 'efsd',
      street1Billing : 'esfd',
      street2Billing : 'ewad',
      cityBilling : 'wefds',
      stateBilling : 'qwas',
      zipBilling : 567,
      notesBilling : 'fdgh'
    },
    {
      contactType : 'billing',
      individualName : 'fth',
      firstName : 'Sriya',
      lastName : 'Sanam',
      title : 'Sales Rep',
      jobFunction : 'Engineer',
      department : 'Sales',
      email : 'jgyfhs@umail.com',
      workPhone : 67809,
      homePhoneBilling : 5678,
      cellPhoneBilling : 678,
      faxBilling : 5678,
      reportsToBilling : 'rgfb',
      marketingProjectBilling : 'gghj',
      referredByBilling : 'efsd',
      street1Billing : 'esfd',
      street2Billing : 'ewad',
      cityBilling : 'wefds',
      stateBilling : 'qwas',
      zipBilling : 567,
      notesBilling : 'fdgh'
    }
  ]
];

export let organizationContactBusinessData : Array<Array<contactBusiness>> = [
  [
    {
      firstNameBusiness : 'Sasha',
      lastNameBusiness : 'Sanam',
      titleBusiness : 'Sales Rep',
      jobFunctionBusiness : 'Engineer',
      departmentBusiness : 'Sales',
      emailBusiness : 'jgyfhs@umail.com',
      workPhoneBusiness : 67809
    },
    {
      firstNameBusiness : 'Sriya',
      lastNameBusiness : 'Sanam',
      titleBusiness : 'Sales Rep',
      jobFunctionBusiness : 'Engineer',
      departmentBusiness : 'Sales',
      emailBusiness : 'jgyfhs@umail.com',
      workPhoneBusiness : 67809
    }
  ],
  [
    {
      firstNameBusiness : 'Blinky',
      lastNameBusiness : 'Bloom',
      titleBusiness : 'Sales Rep',
      jobFunctionBusiness : 'Engineer',
      departmentBusiness : 'Sales',
      emailBusiness : 'jgyfhs@umail.com',
      workPhoneBusiness : 67809
    },
    {
      firstNameBusiness : 'Buttercups',
      lastNameBusiness : '',
      titleBusiness : 'Sales Rep',
      jobFunctionBusiness : 'Engineer',
      departmentBusiness : 'Sales',
      emailBusiness : 'jgyfhs@umail.com',
      workPhoneBusiness : 67809
    }
  ],
  [
    {
      firstNameBusiness : 'Blossoms',
      lastNameBusiness : 'Gertrude',
      titleBusiness : 'Sales Rep',
      jobFunctionBusiness : 'Engineer',
      departmentBusiness : 'Sales',
      emailBusiness : 'jgyfhs@umail.com',
      workPhoneBusiness : 67809
    },
    {
      firstNameBusiness : 'Sriya',
      lastNameBusiness : 'Sanam',
      titleBusiness : 'Sales Rep',
      jobFunctionBusiness : 'Engineer',
      departmentBusiness : 'Sales',
      emailBusiness : 'jgyfhs@umail.com',
      workPhoneBusiness : 67809
    }
  ],
];

export let organizationAgentsData : Array<Array<agents>> = [
  [
    {
      initialSR : 'Tracy',
      currentOwner : 'German',
      salesEngineer : 'Yes,',
      salesAccess : 'Sharman'
    },
    {
      initialSR : 'Sherlock',
      currentOwner : 'German',
      salesEngineer : 'Yes,',
      salesAccess : 'Sharman'
    }
  ],
  [
    {
      initialSR : 'Mojojojo',
      currentOwner : 'Meow',
      salesEngineer : 'Yes,',
      salesAccess : 'Sharman'
    },
    {
      initialSR : 'Dexter',
      currentOwner : 'German',
      salesEngineer : 'Yes,',
      salesAccess : 'Sharman'
    }
  ],
  [
    {
      initialSR : 'Tranquille',
      currentOwner : 'German',
      salesEngineer : 'Yes,',
      salesAccess : 'Sharman'
    },
    {
      initialSR : 'Sherlock',
      currentOwner : 'German',
      salesEngineer : 'Yes,',
      salesAccess : 'Sharman'
    }
  ]
];


export let orgData:Array<organization> = [
  {
    orgID : 1301,
    orgCompanyInfo : organizationCompanyInfoData[0],
    orgAddress : organizationAddressData[0],
    orgContactBilling : organizationContactBillingData[0],
    orgContactBusiness : organizationContactBusinessData[0],
    orgAgents : organizationAgentsData[0]
  },

  {
    orgID : 1303,
    orgCompanyInfo : organizationCompanyInfoData[1],
    orgAddress : organizationAddressData[1],
    orgContactBilling : organizationContactBillingData[1],
    orgContactBusiness : organizationContactBusinessData[1],
    orgAgents : organizationAgentsData[1]
  },

  {
    orgID : 1305,
    orgCompanyInfo : organizationCompanyInfoData[2],
    orgAddress : organizationAddressData[2],
    orgContactBilling : organizationContactBillingData[2],
    orgContactBusiness : organizationContactBusinessData[2],
    orgAgents : organizationAgentsData[2]
  }
];

