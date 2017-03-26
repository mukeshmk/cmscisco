import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { OrganizationComponent } from './organization/organization.component';
import { OrdersComponent } from './orders/orders.component';
import { SearchComponent } from './search/search.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { OrdercountComponent } from './ordercount/ordercount.component';
import { Routing } from './app.routing';
import { ViewOrganizationComponent } from './organization/view-organization/view-organization.component';
import { NgSemanticModule } from "ng-semantic";
import { Ng2PaginationModule} from 'ng2-pagination';
import { OrgDataRowComponent } from './organization/org-data-row/org-data-row.component';
import { OrganizationNewComponent } from './organization/organization-new/organization-new.component';
import { OrganizationEditComponent } from './organization/organization-edit/organization-edit.component';
import { OrganizationHeaderComponent } from './organization/organization-header/organization-header.component';
import { ViewaccountDataRowComponent } from './accounts/view-accounts/viewaccount-data-row/viewaccount-data-row.component';
import { AccountNewComponent } from './accounts/account-new/account-new.component';
import { AccountEditComponent } from './accounts/account-edit/account-edit.component';
import { ViewAccountsComponent } from './accounts/view-accounts/view-accounts.component';

/*BLis Module*/

import { RealignComponent } from './realign/realign.component';
import { UsersComponent } from './users/users.component';
import { TeamsComponent } from './teams/teams.component';
import { RolesComponent } from './roles/roles.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamsHeadingComponent } from './teams/teams-heading/teams-heading.component';
import { TeamsDataRowComponent } from './teams/teams-data-row/teams-data-row.component';
import { TeamsEditComponent } from './teams/teams-edit/teams-edit.component';
import { TeamsViewComponent } from './teams/teams-view/teams-view.component';
import { UsersHeadingComponent } from './users/users-heading/users-heading.component';
import { UsersDataRowComponent } from './users/users-data-row/users-data-row.component';
import { UsersViewComponent } from './users/users-view/users-view.component';
import { UsersNewComponent } from './users/users-new/users-new.component';
import { RolesDataRowComponent } from './roles/roles-data-row/roles-data-row.component';
import { RolesNewComponent } from './roles/roles-new/roles-new.component';
import { RolesHeadingComponent } from './roles/roles-heading/roles-heading.component';
import { RolesViewComponent } from './roles/roles-view/roles-view.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { RolesEditComponent } from './roles/roles-edit/roles-edit.component';
import { LoginComponent } from './login/login.component';
import { RealignViewComponent } from './realign/realign-view/realign-view.component';


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
