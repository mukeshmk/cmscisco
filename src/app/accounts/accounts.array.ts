import {account, accountDetails, accountAddress, accountContacts, accountAgents} from "./accounts.interface";

    /*{
        accDetails :
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

        accAddress :
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

        accContacts :
        {
            firstName : 'Vena',
            lastName : 'Anamika',
            title : 'title',
            jobFunction : 'prof',
            department : 'Gryffindor',
            email : 'hogsmeade@fanmail.com',
            workPhone : '7777'
        },

        accAgents:
        {
            initialSalesRep : 'Yes',
            currentOwner : 'Dumbledore',
            csm : 'McGonagal',
            salesEngineer : 'Malfoy',
            salesAccess : 'Hermoine',
            collector : 'Dobby'
        }
    },
    {
        accDetails :
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
        },
        accAddress :
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
        accContacts :
        {
            firstName : 'Vena',
            lastName : 'Anamika',
            title : 'title',
            jobFunction : 'prof',
            department : 'HufflePuff',
            email : 'hogsmeade@fanmail.com',
            workPhone : '7777'
        },
        accAgents:
        {
            initialSalesRep : 'Yes',
            currentOwner : 'Dumbledore',
            csm : 'McGonagal',
            salesEngineer : 'Malfoy',
            salesAccess : 'Hermoine',
            collector : 'Dobby'
        }
    }
];
*/

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

export let accContactsData : Array<accountContacts> = [

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
    },
];

export let accAgentsData : Array<accountAgents> = [
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
    }
];
export let accountData : Array<account> = [
    {
        orgID : 1234,
        accDetails : accDetailsData[0],

        accAddress : accAddressData[0],

        accContacts : accContactsData[0],

        accAgents : accAgentsData[0]
    },
    {
        orgID : 1234,
        accDetails : accDetailsData[1],

        accAddress : accAddressData[1],

        accContacts : accContactsData[1],

        accAgents : accAgentsData[1]
    },
    {
        orgID : 1234,
        accDetails : accDetailsData[2],

        accAddress : accAddressData[2],

        accContacts : accContactsData[2],

        accAgents : accAgentsData[2]
    }
];