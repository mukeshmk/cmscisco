import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AccountsComponent } from './cms/accounts/accounts.component';
import { OrganizationComponent } from './cms/organization/organization.component';
import { OrdersComponent } from './cms/orders/orders.component';
import { SearchComponent } from './search/search.component';
import { NavigationbarComponent } from './cms/navigationbar/navigationbar.component';
import { OrdercountComponent } from './cms/ordercount/ordercount.component';
import { Routing } from './app.routing';
import { ViewOrganizationComponent } from './cms/organization/view-organization/view-organization.component';
import { NgSemanticModule } from "ng-semantic";
import { Ng2PaginationModule} from 'ng2-pagination';
import { OrgDataRowComponent } from './cms/organization/org-data-row/org-data-row.component';
import { OrganizationNewComponent } from './cms/organization/organization-new/organization-new.component';
import { OrganizationEditComponent } from './cms/organization/organization-edit/organization-edit.component';
import { OrganizationHeaderComponent } from './cms/organization/organization-header/organization-header.component';
import { ViewaccountDataRowComponent } from './cms/accounts/view-accounts/viewaccount-data-row/viewaccount-data-row.component';
import { AccountNewComponent } from './cms/accounts/account-new/account-new.component';
import { AccountEditComponent } from './cms/accounts/account-edit/account-edit.component';
import { ViewAccountsComponent } from './cms/accounts/view-accounts/view-accounts.component';
/*BLis Module*/

import { RealignComponent } from './blis/realign/realign.component';
import { UsersComponent } from './blis/users/users.component';
import { TeamsComponent } from './blis/teams/teams.component';
import { RolesComponent } from './blis/roles/roles.component';
import { ProfileComponent } from './blis/profile/profile.component';
import { DashboardComponent } from './blis/dashboard/dashboard.component';
import { TeamsHeadingComponent } from './blis/teams/teams-heading/teams-heading.component';
import { TeamsDataRowComponent } from './blis/teams/teams-data-row/teams-data-row.component';
import { TeamsEditComponent } from './blis/teams/teams-edit/teams-edit.component';
import { TeamsViewComponent } from './blis/teams/teams-view/teams-view.component';
import { UsersHeadingComponent } from './blis/users/users-heading/users-heading.component';
import { UsersDataRowComponent } from './blis/users/users-data-row/users-data-row.component';
import { UsersViewComponent } from './blis/users/users-view/users-view.component';
import { UsersNewComponent } from './blis/users/users-new/users-new.component';
import { RolesDataRowComponent } from './blis/roles/roles-data-row/roles-data-row.component';
import { RolesNewComponent } from './blis/roles/roles-new/roles-new.component';
import { RolesHeadingComponent } from './blis/roles/roles-heading/roles-heading.component';
import { RolesViewComponent } from './blis/roles/roles-view/roles-view.component';
import { UsersEditComponent } from './blis/users/users-edit/users-edit.component';
import { RolesEditComponent } from './blis/roles/roles-edit/roles-edit.component';
import { LoginComponent } from './login/login.component';
import { RealignViewComponent } from './blis/realign/realign-view/realign-view.component';
import { BlisComponent } from './blis/blis.component';
import { CmsComponent } from './cms/cms.component';
import {NavigationComponent} from "./blis/navigation/navigation.component";



@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    OrganizationComponent,
    OrdersComponent,
    SearchComponent,
    NavigationbarComponent,
    OrdercountComponent,
    ViewOrganizationComponent,
    OrgDataRowComponent,
    OrganizationNewComponent,
    OrganizationEditComponent,
    OrganizationHeaderComponent,
    ViewaccountDataRowComponent,
    AccountNewComponent,
    AccountEditComponent,
    ViewAccountsComponent,
    RealignComponent,
    UsersComponent,
    TeamsComponent,
    RolesComponent,
    ProfileComponent,
    DashboardComponent,
    TeamsHeadingComponent,
    TeamsDataRowComponent,
    TeamsEditComponent,
    TeamsViewComponent,
    UsersHeadingComponent,
    UsersDataRowComponent,
    UsersViewComponent,
    UsersNewComponent,
    RolesDataRowComponent,
    RolesNewComponent,
    RolesHeadingComponent,
    RolesViewComponent,
    UsersEditComponent,
    RolesEditComponent,
    LoginComponent,
    RealignViewComponent,
    ViewAccountsComponent,
    BlisComponent,
    CmsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    NgSemanticModule,
    Ng2PaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
