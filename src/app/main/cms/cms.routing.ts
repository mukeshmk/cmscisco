import {OrdercountComponent} from  './ordercount/ordercount.component';
import { OrganizationComponent } from './organization/organization.component';
import { OrdersComponent } from './orders/orders.component';
import { ViewOrganizationComponent } from './organization/view-organization/view-organization.component';
import { OrganizationRoutes} from "./organization/organization.routing";
import { AccountRoutes } from "./accounts/account.routing";
import {AccountsComponent} from "./accounts/accounts.component";

export let cmsRoute : [any] = [
    {
        path : '',
        component : OrdercountComponent
    },
    {
        path : 'ordercount',
        component : OrdercountComponent
    },
    {
        path : 'dashboard',
        component : OrdercountComponent
    },
    {
        path : 'accounts',
        component : AccountsComponent,
        children : AccountRoutes
    },
    {
        path : 'organization',
        component : OrganizationComponent,
        children : OrganizationRoutes
    },
    {
        path : 'orders/:ordID',
        component : OrdersComponent
    },
    {
        path : 'vieworganization',
        component : ViewOrganizationComponent
    }
];
