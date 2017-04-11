import {RolesViewComponent} from "./roles-view/roles-view.component";
import {RolesNewComponent} from "./roles-new/roles-new.component";
import {RolesEditComponent} from "./roles-edit/roles-edit.component";
export let RolesRoutes = [
  {
    path : '',
    redirectTo : 'view',
    pathMatch: 'full'
  },
  {
    path : 'view',
    component : RolesViewComponent
  },
  {
    path : 'new',
    component : RolesNewComponent
  },
  {
    path : 'edit/:id',
    component : RolesEditComponent
  }
];
