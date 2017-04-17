import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';



import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {GuestGuard} from "./login/guest.guard";
import {LoggedInGuard} from "./login/logged-in.guard";
import {MainRoute} from "./main/main.routing";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";


const appRoutes=[
  {
    path: '',
    name : 'Main',
    canActivate : [GuestGuard],
    component : MainComponent,
    children : MainRoute
  },
  {
    path : "login",
    canActivate : [LoggedInGuard],
    component : LoginComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
  // {
  //   path : 'blis',
  //   name : 'blis',
  //   component : BlisComponent,
  //   canActivate : [loginAuthorization],
  //   children : blisRoute
  // },
  // {
  //   path : 'cms',
  //   name : 'cms',
  //   component : CmsComponent,
  //   canActivate : [loginAuthorization],
  //   children : cmsRoute
  // }

];

export const Routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
