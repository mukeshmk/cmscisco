
import {UsersViewComponent} from "./users-view/users-view.component";
import {UsersNewComponent} from "./users-new/users-new.component";
import {UsersEditComponent} from "./users-edit/users-edit.component";
export let UsersRoutes = [
  {
    path : '',
    redirectTo : 'view',
    pathMatch: 'full'
  },
  {
    path : 'view',
    component : UsersViewComponent
  },
  {
    path : 'new',
    component : UsersNewComponent
  },
  {
    path : 'edit/:onlineName',
    component : UsersEditComponent
  }
];
