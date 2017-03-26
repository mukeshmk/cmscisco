
import {TeamsViewComponent} from "./teams-view/teams-view.component";
import {TeamsEditComponent} from "./teams-edit/teams-edit.component";
export let TeamsRoutes = [
  {
    path : '',
    redirectTo : 'view'
  },
  {
    path : 'view',
    component : TeamsViewComponent
  },
  {
    path : 'edit/:id',
    component : TeamsEditComponent
  }
];
