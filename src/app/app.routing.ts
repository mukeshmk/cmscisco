import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';



import {LoginComponent} from "./login/login.component";
import {BlisComponent} from "./blis/blis.component";
import {blisRoute} from "./blis/blis.routing";
import {cmsRoute} from "./cms/cms.routing";
import {CmsComponent} from "./cms/cms.component";
import loginAuthorization from "./login/login.auth";


const appRoutes=[
  {
    path: '',
    name : 'Login',
    component : LoginComponent,
    pathMatch : 'full',
  },
  {
    path : 'blis',
    name : 'blis',
    component : BlisComponent,
    canActivate : [loginAuthorization],
    children : blisRoute
  },
  {
    path : 'cms',
    name : 'cms',
    component : CmsComponent,
    canActivate : [loginAuthorization],
    children : cmsRoute
  }
];

export const Routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);
