import {ViewAccountsComponent} from "./view-accounts/view-accounts.component";
import {AccountNewComponent} from "./account-new/account-new.component";
import {AccountEditComponent} from "./account-edit/account-edit.component";
export let AccountRoutes = [
    {
      path : '',
      component : ViewAccountsComponent
    },
    {
        path : 'new/:orgID',
        component : AccountNewComponent
    },
    {
        path : 'edit/:orgID',
        component : AccountEditComponent
    }
];
