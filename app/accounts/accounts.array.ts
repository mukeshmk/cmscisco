import {
    account, accountDetails, accountAddress, accountContacts, accountAgents,
    accountPaymentDetail, accountActivityNotes, accountManagePoNumbers, accountManageSplitCriteria,
    accountManageInvoiceDefinition
} from "./accounts.interface";



export let accountPaymentDetailsData : Array<accountPaymentDetail> = [
    {
        paymentMethod: 'CreditCard',
        creditCard: 'VISA',
        creditCardNumber: '402912315623123',
        expirationDate: '12-11-2015',
        nameInCard: 'Aakash C',
        cardSecurityCode: '071',
    },
    {
        paymentMethod: 'CreditCard',
        creditCard: 'VISA',
        creditCardNumber: '402912456453123123',
        expirationDate: '12-11-2015',
        nameInCard: 'Aakash C',
        cardSecurityCode: '071',
    },
    {
        paymentMethod: 'CreditCard',
        creditCard: 'VISA',
        creditCardNumber: '40291456423123123',
        expirationDate: '12-14-2015',
        nameInCard: 'Aakash C',
        cardSecurityCode: '071',
    },
    {
        paymentMethod: 'CreditCard',
        creditCard: 'VISA',
        creditCardNumber: '40291234564123123',
        expirationDate: '12-14-2015',
        nameInCard: 'Aakash C',
        cardSecurityCode: '071',
    }
];

export let accountActivityNotesData : Array<Array<accountActivityNotes>> = [
    [
        {
            noteType : 'At Risk of',
            activity : 'IncorrectExpectations',
            subject : '',
            comments : '',
            distributionList : '',
        },
        {
            noteType : 'At Risk of',
            activity : 'IncorrectExpectations',
            subject : '',
            comments : '',
            distributionList : '',
        },
        {
            noteType : 'At Risk of',
            activity : 'IncorrectExpectations',
            subject : '',
            comments : '',
            distributionList : '',
        },
    ],
    [
        {
            noteType : 'At Risk of',
            activity : 'IncorrectExpectations',
            subject : '',
            comments : '',
            distributionList : '',
        },
        {
            noteType : 'At Risk of',
            activity : 'IncorrectExpectations',
            subject : '',
            comments : '',
            distributionList : '',
        },
        {
            noteType : 'At Risk of',
            activity : 'IncorrectExpectations',
            subject : '',
            comments : '',
            distributionList : '',
        },
    ],
    [
        {
            noteType : 'At Risk of',
            activity : 'IncorrectExpectations',
            subject : '',
            comments : '',
            distributionList : '',
        },
        {
            noteType : 'At Risk of',
            activity : 'IncorrectExpectations',
            subject : '',
            comments : '',
            distributionList : '',
        },
        {
            noteType : 'At Risk of',
            activity : 'IncorrectExpectations',
            subject : '',
            comments : '',
            distributionList : '',
        },
    ]
];



export let accDetailsData : Array<accountDetails> = [
    {
        orgName : 'shashank',
        accName : 'aakash',
        billingMethod : 'Cash',
        billingFrequency : 'Daily',
        paymentMethod : 'Debit',
        paymentTerm : 'Yearly',
        currency : 'USD',
        accType  : 'AC',
        link : 'Yes',
        accStatus : 'Pending-Order',
        billDay : '',
        mrr : '',
        activeOn : ''
    },
    {
        orgName : 'Harry',
        accName : 'Potter',
        billingMethod : 'Cash',
        billingFrequency : 'Daily',
        paymentMethod : 'Debit',
        paymentTerm : 'Yearly',
        currency : 'USD',
        accType  : 'AC',
        link : 'Yes',
        accStatus : 'Pending-Order',
        billDay : '',
        mrr : '',
        activeOn : ''
    },
    {
        orgName : 'Neville',
        accName : 'LongBottom',
        billingMethod : 'Cash',
        billingFrequency : 'Daily',
        paymentMethod : 'Debit',
        paymentTerm : 'Yearly',
        currency : 'USD',
        accType  : 'AC',
        link : 'Yes',
        accStatus : 'Pending-Order',
        billDay : '',
        mrr : '',
        activeOn : ''
    }

];

export let accAddressData : Array<Array<accountAddress>> = [
    [
    {
        country : 'India',
        street1 : 'Dubai Kuruku Sandhu',
        street2 : 'Dubai Main Road',
        city : 'Dubai',
        state : 'Dubai County',
        zip : 12345,
        phone : 12334345,
        fax : 123123
    },

    {
        country : 'India',
        street1 : 'Dubai Kuruku Sandhu',
        street2 : 'Dubai Main Road',
        city : 'Dubai',
        state : 'Dubai County',
        zip : 12345,
        phone : 12334345,
        fax : 123123
    },

    {
        country : 'India',
        street1 : 'Dubai Kuruku Sandhu',
        street2 : 'Dubai Main Road',
        city : 'Dubai',
        state : 'Dubai County',
        zip : 12345,
        phone : 12334345,
        fax : 123123
    },
],
    [
        {
            country : 'India',
            street1 : 'Dubai Kuruku Sandhu',
            street2 : 'Dubai Main Road',
            city : 'Dubai',
            state : 'Dubai County',
            zip : 12345,
            phone : 12334345,
            fax : 123123
        },

        {
            country : 'India',
            street1 : 'Dubai Kuruku Sandhu',
            street2 : 'Dubai Main Road',
            city : 'Dubai',
            state : 'Dubai County',
            zip : 12345,
            phone : 12334345,
            fax : 123123
        },

        {
            country : 'India',
            street1 : 'Dubai Kuruku Sandhu',
            street2 : 'Dubai Main Road',
            city : 'Dubai',
            state : 'Dubai County',
            zip : 12345,
            phone : 12334345,
            fax : 123123
        },
    ],
    [
        {
            country : 'India',
            street1 : 'Dubai Kuruku Sandhu',
            street2 : 'Dubai Main Road',
            city : 'Dubai',
            state : 'Dubai County',
            zip : 12345,
            phone : 12334345,
            fax : 123123
        },

        {
            country : 'India',
            street1 : 'Dubai Kuruku Sandhu',
            street2 : 'Dubai Main Road',
            city : 'Dubai',
            state : 'Dubai County',
            zip : 12345,
            phone : 12334345,
            fax : 123123
        },

        {
            country : 'India',
            street1 : 'Dubai Kuruku Sandhu',
            street2 : 'Dubai Main Road',
            city : 'Dubai',
            state : 'Dubai County',
            zip : 12345,
            phone : 12334345,
            fax : 123123
        },
    ]
];

export let accountManagesPoNumbersData : Array<Array<accountManagePoNumbers>> =[
    [
        {
        poNumber : '',
            description :''
    },
    {
        poNumber : '',
        description : ''
    },
    {
        poNumber : '',
        description : ''
    }
    ],

    [
        {
            poNumber : '',
            description :''
        },
        {
            poNumber : '',
            description : ''
        },
        {
            poNumber : '',
            description : ''
        }
    ],

    [
        {
            poNumber : '',
            description :''
        },
        {
            poNumber : '',
            description : ''
        },
        {
            poNumber : '',
            description : ''
        }
    ],

];

export let accountManageSplitCriteriaData : Array<Array<accountManageSplitCriteria>> = [
    [
        {
        splitCriteria : '',
        splitBillfromAccount : '',
        description : '',
    },
    {
        splitCriteria : '',
        splitBillfromAccount : '',
        description : '',
    },
    {
        splitCriteria : '',
        splitBillfromAccount : '',
        description : '',
    }
    ],
    [
        {
            splitCriteria : '',
            splitBillfromAccount : '',
            description : '',
        },
        {
            splitCriteria : '',
            splitBillfromAccount : '',
            description : '',
        },
        {
            splitCriteria : '',
            splitBillfromAccount : '',
            description : '',
        }
    ],
    [
        {
            splitCriteria : '',
            splitBillfromAccount : '',
            description : '',
        },
        {
            splitCriteria : '',
            splitBillfromAccount : '',
            description : '',
        },
        {
            splitCriteria : '',
            splitBillfromAccount : '',
            description : '',
        }
    ]
];

export let accountManageInvoiceDefinitionData : Array<accountManageInvoiceDefinition> = [
    {
        name : 'AccountDemo24Ag'
    }
];



export let accContactsData : Array<Array<accountContacts>> = [

    [
    {
        firstName : 'Vena',
        lastName : 'Anamika',
        title : 'title',
        jobFunction : 'prof',
        department : 'Slytherin',
        email : 'hogsmeade@fanmail.com',
        workPhone : '7777'
    },

    {
        firstName : 'Vena',
        lastName : 'Anamika',
        title : 'title',
        jobFunction : 'prof',
        department : 'Slytherin',
        email : 'hogsmeade@fanmail.com',
        workPhone : '7777'
    },

    {
        firstName : 'Vena',
        lastName : 'Anamika',
        title : 'title',
        jobFunction : 'prof',
        department : 'Slytherin',
        email : 'hogsmeade@fanmail.com',
        workPhone : '7777'
    },],

    [
        {
            firstName : 'Vena',
            lastName : 'Anamika',
            title : 'title',
            jobFunction : 'prof',
            department : 'Slytherin',
            email : 'hogsmeade@fanmail.com',
            workPhone : '7777'
        },

        {
            firstName : 'Vena',
            lastName : 'Anamika',
            title : 'title',
            jobFunction : 'prof',
            department : 'Slytherin',
            email : 'hogsmeade@fanmail.com',
            workPhone : '7777'
        },

        {
            firstName : 'Vena',
            lastName : 'Anamika',
            title : 'title',
            jobFunction : 'prof',
            department : 'Slytherin',
            email : 'hogsmeade@fanmail.com',
            workPhone : '7777'
        },],

    [
        {
            firstName : 'Vena',
            lastName : 'Anamika',
            title : 'title',
            jobFunction : 'prof',
            department : 'Slytherin',
            email : 'hogsmeade@fanmail.com',
            workPhone : '7777'
        },

        {
            firstName : 'Vena',
            lastName : 'Anamika',
            title : 'title',
            jobFunction : 'prof',
            department : 'Slytherin',
            email : 'hogsmeade@fanmail.com',
            workPhone : '7777'
        },

        {
            firstName : 'Vena',
            lastName : 'Anamika',
            title : 'title',
            jobFunction : 'prof',
            department : 'Slytherin',
            email : 'hogsmeade@fanmail.com',
            workPhone : '7777'
        },],
];

export let accAgentsData : Array<Array<accountAgents>> = [

    [
        {
        initialSalesRep : 'Yes',
        currentOwner : 'Dumbledore',
        csm : 'McGonagal',
        salesEngineer : 'Malfoy',
        salesAccess : 'Hermoine',
        collector : 'Dobby'
    },
    {
        initialSalesRep : 'Yes',
        currentOwner : 'Dumbledore',
        csm : 'McGonagal',
        salesEngineer : 'Malfoy',
        salesAccess : 'Hermoine',
        collector : 'Dobby'
    },
    {
        initialSalesRep : 'Yes',
        currentOwner : 'Dumbledore',
        csm : 'McGonagal',
        salesEngineer : 'Malfoy',
        salesAccess : 'Hermoine',
        collector : 'Dobby'
    }],

    [
        {
            initialSalesRep : 'Yes',
            currentOwner : 'Dumbledore',
            csm : 'McGonagal',
            salesEngineer : 'Malfoy',
            salesAccess : 'Hermoine',
            collector : 'Dobby'
        },
        {
            initialSalesRep : 'Yes',
            currentOwner : 'Dumbledore',
            csm : 'McGonagal',
            salesEngineer : 'Malfoy',
            salesAccess : 'Hermoine',
            collector : 'Dobby'
        },
        {
            initialSalesRep : 'Yes',
            currentOwner : 'Dumbledore',
            csm : 'McGonagal',
            salesEngineer : 'Malfoy',
            salesAccess : 'Hermoine',
            collector : 'Dobby'
        }],

    [
        {
            initialSalesRep : 'Yes',
            currentOwner : 'Dumbledore',
            csm : 'McGonagal',
            salesEngineer : 'Malfoy',
            salesAccess : 'Hermoine',
            collector : 'Dobby'
        },
        {
            initialSalesRep : 'Yes',
            currentOwner : 'Dumbledore',
            csm : 'McGonagal',
            salesEngineer : 'Malfoy',
            salesAccess : 'Hermoine',
            collector : 'Dobby'
        },
        {
            initialSalesRep : 'Yes',
            currentOwner : 'Dumbledore',
            csm : 'McGonagal',
            salesEngineer : 'Malfoy',
            salesAccess : 'Hermoine',
            collector : 'Dobby'
        }]

];



/*---------------------------------------------------------AccountArray-------------------------------------------------------------------------------*/
export let accountData : Array<account> = [
    {
        orgID : 1303,
        accDetails : accDetailsData[0],

        accAddress : accAddressData[0],

        accContacts : accContactsData[0],

        accAgents : accAgentsData[0],

        paymentDetails : accountPaymentDetailsData[0],

        activityNotes : accountActivityNotesData[0],

        managePoNumbers : accountManagesPoNumbersData[0],

        manageSplitCriteria : accountManageSplitCriteriaData[0],

        manageInvoiceDefinition : accountManageInvoiceDefinitionData[0]
    },
    {
        orgID : 1301,
        accDetails : accDetailsData[1],

        accAddress : accAddressData[1],

        accContacts : accContactsData[1],

        accAgents : accAgentsData[1],

        paymentDetails : accountPaymentDetailsData[1],

        activityNotes : accountActivityNotesData[1],

        managePoNumbers : accountManagesPoNumbersData[1],

        manageSplitCriteria : accountManageSplitCriteriaData[1],

        manageInvoiceDefinition : accountManageInvoiceDefinitionData[1]
    },
    {
        orgID : 1304,
        accDetails : accDetailsData[2],

        accAddress : accAddressData[2],

        accContacts : accContactsData[2],

        accAgents : accAgentsData[2],

        paymentDetails : accountPaymentDetailsData[1],

        activityNotes : accountActivityNotesData[1],

        managePoNumbers : accountManagesPoNumbersData[1],

        manageSplitCriteria : accountManageSplitCriteriaData[1],

        manageInvoiceDefinition : accountManageInvoiceDefinitionData[1]
    }
];
/*----------------------------------------------------------------------------------------------------------------------------------------------*/

