import {UsersComponent} from "./users/users.component";
import {TeamsComponent} from "./teams/teams.component";
import {RolesComponent} from "./roles/roles.component";
import {ProfileComponent} from "./profile/profile.component";
import {RealignComponent} from "./realign/realign.component";
import {TeamsRoutes} from "./teams/teams.routing";
import {RealignRoutes} from "./realign/realign.routing";
import {UsersRoutes} from "./users/users.routing";
import {RolesRoutes} from "./roles/roles.routing";
import {DashboardComponent} from "./dashboard/dashboard.component";


export let blisRoute = [
    {
        path: '',
        name : 'Dashboard',
        component : DashboardComponent,
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

