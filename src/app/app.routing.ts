import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OrdercountComponent} from  './ordercount/ordercount.component';
import { OrganizationComponent } from './organization/organization.component';
import { OrdersComponent } from './orders/orders.component';
import { ViewOrganizationComponent } from './organization/view-organization/view-organization.component';
import { OrganizationRoutes} from "./organization/organization.routing";
import { AccountRoutes } from "./accounts/account.routing";
import {AccountsComponent} from "./accounts/accounts.component";

import {UsersComponent} from "./users/users.component";
import {TeamsComponent} from "./teams/teams.component";
import {RolesComponent} from "./roles/roles.component";
import {ProfileComponent} from "./profile/profile.component";
import {RealignComponent} from "./realign/realign.component";
import {TeamsRoutes} from "./teams/teams.routing";
import {RealignRoutes} from "./realign/realign.routing";
import {UsersRoutes} from "./users/users.routing";
import {RolesRoutes} from "./roles/roles.routing";
import {LoginComponent} from "./login/login.component";

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
  },
  {
    path: 'login',
    name : 'Login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    name: 'Users',
    path : 'users',
    component : UsersComponent,
    children : UsersRoutes
  },
  {
    name: 'Teams',
    path : 'teams',
    component : TeamsComponent,
    children : TeamsRoutes
  },
  {
    name: 'Roles',
    path : 'roles',
    component : RolesComponent,
    children : RolesRoutes
  },
  {
    name: 'Profile',
    path : 'profile',
    component : ProfileComponent
  },
  {
    name: 'Realign',
    path : 'realign',
    component : RealignComponent,
    children : RealignRoutes
  }
];

export const Routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
