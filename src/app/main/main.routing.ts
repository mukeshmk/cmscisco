import {DashboardComponent} from "./blis/dashboard/dashboard.component";
import {AppForkComponent} from "./app-fork/app-fork.component";
import {OrdercountComponent} from "./cms/ordercount/ordercount.component";
import {AccountsComponent} from "./cms/accounts/accounts.component";
import {AccountRoutes} from "./cms/accounts/account.routing";
import {OrganizationComponent} from "./cms/organization/organization.component";
import {OrganizationRoutes} from "./cms/organization/organization.routing";
import {OrdersComponent} from "./cms/orders/orders.component";
import {ViewOrganizationComponent} from "./cms/organization/view-organization/view-organization.component";
import {UsersComponent} from "./blis/users/users.component";
import {TeamsComponent} from "./blis/teams/teams.component";
import {RolesComponent} from "./blis/roles/roles.component";
import {UsersRoutes} from "./blis/users/users.routing";
import {TeamsRoutes} from "./blis/teams/teams.routing";
import {RolesRoutes} from "./blis/roles/roles.routing";
import {ProfileComponent} from "./blis/profile/profile.component";
import {RealignComponent} from "./blis/realign/realign.component";
import {RealignRoutes} from "./blis/realign/realign.routing";



export let MainRoute = [
  {
    path: '',
    component : AppForkComponent,
    pathMatch : 'full'
  },
  {
    path : 'ordercount',
    component : OrdercountComponent,
    pathMatch : "full"
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
  // Blis Routes
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
