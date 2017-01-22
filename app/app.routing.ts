import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OrdercountComponent} from  './ordercount/ordercount.component';
import { AccountsComponent } from './accounts/accounts.component';
import { OrganizationComponent } from './organization/organization.component';
import { OrdersComponent } from './orders/orders.component';
import { ViewOrganizationComponent } from './organization/view-organization/view-organization.component';
import { OrganizationRoutes} from "./organization/organization.routing";


const appRoutes=[
  {
    path : '',
    component : OrdercountComponent
  },
  {
    path : 'dashboard',
    component : OrdercountComponent
  },
  {
    path : 'accounts',
    component : AccountsComponent
  },
  {
    path : 'organization',
    component : OrganizationComponent,
    children : OrganizationRoutes
  },
  {
    path : 'orders',
    component : OrdersComponent
  },
  {
    path : 'vieworganization',
    component : ViewOrganizationComponent
  }
];

export const Routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
