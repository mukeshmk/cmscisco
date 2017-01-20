import {OrganizationEditComponent} from "./organization-edit/organization-edit.component";
import {OrganizationNewComponent}  from "./organization-new/organization-new.component";
import {ViewOrganizationComponent} from "./view-organization/view-organization.component";

export let OrganizationRoutes = [
    {
        path: '',
        component: ViewOrganizationComponent
    },
    {
        path : 'view',
        component : ViewOrganizationComponent
    },
    {
        path : 'new',
        component : OrganizationNewComponent
    },
    {
        path : 'edit',
        component : OrganizationEditComponent
    }
];
