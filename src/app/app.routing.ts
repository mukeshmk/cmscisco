import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';



import {LoginComponent} from "./login/login.component";
import {BlisComponent} from "./main/blis/blis.component";
import {blisRoute} from "./main/blis/blis.routing";
import {cmsRoute} from "./main/cms/cms.routing";
import {CmsComponent} from "./main/cms/cms.component";
import loginAuthorization from "./login/login.auth";
import {MainComponent} from "./main/main.component";


const appRoutes=[
  {
    path: '',
    name : 'Main',
    canActivate : [loginAuthorization],
    component : MainComponent,
    pathMatch : 'full',
  },
  {
    path : "login",
    component : LoginComponent
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
