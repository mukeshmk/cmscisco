import {RealignViewComponent} from "./realign-view/realign-view.component";
export let RealignRoutes = [
  {
    path : '',
    redirectTo : 'view',
    pathMatch: 'full'
  },
  {
    path : 'view',
    component : RealignViewComponent
  }
];
