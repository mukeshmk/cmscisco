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
import {CmsUserGuard} from "./cms-user.guard";
import {BlisUserGuard} from "./blis-user.guard";
import {ViewOrdersComponent} from "./cms/orders/view-orders/view-orders.component";


/*
    All the routes have been secured with guards,
    and the AppForkComponent takes care of the dashboard route
 */



export let MainRoute = [
  {
    path: '',
    component : AppForkComponent,
    pathMatch : 'full'
  },
  {
    path : 'ordercount',
    component : OrdercountComponent,
    canActivate : [CmsUserGuard],
    pathMatch : "full"
  },
  {
    path : 'dashboard',
    component : OrdercountComponent,
    canActivate : [CmsUserGuard],
  },
  {
    path : 'accounts',
    component : AccountsComponent,
    canActivate : [CmsUserGuard],
    children : AccountRoutes
  },
  {
    path : 'organization',
    component : OrganizationComponent,
    canActivate : [CmsUserGuard],
    children : OrganizationRoutes
  },
  {
    path : 'orders',
    component : ViewOrdersComponent,
    canActivate : [CmsUserGuard]
  },
  {
    path : 'vieworganization',
    component : ViewOrganizationComponent,
    canActivate : [CmsUserGuard]
  },
  // Blis Routes
  {
    name: 'Users',
    path : 'users',
    component : UsersComponent,
    canActivate : [BlisUserGuard],
    children : UsersRoutes
  },
  {
    name: 'Teams',
    path : 'teams',
    component : TeamsComponent,
    canActivate : [BlisUserGuard],
    children : TeamsRoutes
  },
  {
    name: 'Roles',
    path : 'roles',
    component : RolesComponent,
    canActivate : [BlisUserGuard],
    children : RolesRoutes
  },
  {
    name: 'Profile',
    path : 'profile',
    canActivate : [BlisUserGuard],
    component : ProfileComponent
  },
  {
    name: 'Realign',
    path : 'realign',
    canActivate : [BlisUserGuard],
    component : RealignComponent,
    children : RealignRoutes
  }
];
