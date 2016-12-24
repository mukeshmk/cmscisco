import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OrdercountComponent} from  './ordercount/ordercount.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { OrganizationComponent } from './organization/organization.component';
import { OrdersComponent } from './orders/orders.component';
import { ViewOrganizationComponent } from './view-organization/view-organization.component';


const appRoutes=[
  {
    path : '',
    name: 'OrderCount',
    component : OrdercountComponent,
  },
  {
    path : 'dashboard',
    name: 'Dashboard',
    component : DashboardComponent
  },
  {
    path : 'accounts',
    name: 'Accounts',
    component : AccountsComponent
  },
  {
    path : 'organization',
    name: 'Organization',
    component : OrganizationComponent
  },
  {
    path : 'orders',
    name: 'Orders',
    component : OrdersComponent
  },
  {
    path : 'vieworganization',
    component : ViewOrganizationComponent
  }
];

export const Routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
