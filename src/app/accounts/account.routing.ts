import {ViewAccountsComponent} from "./view-accounts/view-accounts.component";
import {AccountNewComponent} from "./account-new/account-new.component";
export let AccountRoutes = [
    {
      path : '',
        component : ViewAccountsComponent
    },
    {
        path : 'new/:orgID',
        component : AccountNewComponent
    }
];