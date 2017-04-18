import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AccountsComponent } from './main/cms/accounts/accounts.component';
import { OrganizationComponent } from './main/cms/organization/organization.component';
import { OrdersComponent } from './main/cms/orders/orders.component';
import { SearchComponent } from './main/search/search.component';
import { NavigationbarComponent } from './main/cms/navigationbar/navigationbar.component';
import { OrdercountComponent } from './main/cms/ordercount/ordercount.component';
import { Routing } from './app.routing';
import { ViewOrganizationComponent } from './main/cms/organization/view-organization/view-organization.component';
import { NgSemanticModule } from "ng-semantic";
import { Ng2PaginationModule} from 'ng2-pagination';
import { OrgDataRowComponent } from './main/cms/organization/org-data-row/org-data-row.component';
import { OrganizationNewComponent } from './main/cms/organization/organization-new/organization-new.component';
import { OrganizationEditComponent } from './main/cms/organization/organization-edit/organization-edit.component';
import { OrganizationHeaderComponent } from './main/cms/organization/organization-header/organization-header.component';
import { ViewaccountDataRowComponent } from './main/cms/accounts/view-accounts/viewaccount-data-row/viewaccount-data-row.component';
import { AccountNewComponent } from './main/cms/accounts/account-new/account-new.component';
import { AccountEditComponent } from './main/cms/accounts/account-edit/account-edit.component';
import { ViewAccountsComponent } from './main/cms/accounts/view-accounts/view-accounts.component';
/*BLis Module*/

import { RealignComponent } from './main/blis/realign/realign.component';
import { UsersComponent } from './main/blis/users/users.component';
import { TeamsComponent } from './main/blis/teams/teams.component';
import { RolesComponent } from './main/blis/roles/roles.component';
import { ProfileComponent } from './main/blis/profile/profile.component';
import { DashboardComponent } from './main/blis/dashboard/dashboard.component';
import { TeamsHeadingComponent } from './main/blis/teams/teams-heading/teams-heading.component';
import { TeamsDataRowComponent } from './main/blis/teams/teams-data-row/teams-data-row.component';
import { TeamsEditComponent } from './main/blis/teams/teams-edit/teams-edit.component';
import { TeamsViewComponent } from './main/blis/teams/teams-view/teams-view.component';
import { UsersHeadingComponent } from './main/blis/users/users-heading/users-heading.component';
import { UsersDataRowComponent } from './main/blis/users/users-data-row/users-data-row.component';
import { UsersViewComponent } from './main/blis/users/users-view/users-view.component';
import { UsersNewComponent } from './main/blis/users/users-new/users-new.component';
import { RolesDataRowComponent } from './main/blis/roles/roles-data-row/roles-data-row.component';
import { RolesNewComponent } from './main/blis/roles/roles-new/roles-new.component';
import { RolesHeadingComponent } from './main/blis/roles/roles-heading/roles-heading.component';
import { RolesViewComponent } from './main/blis/roles/roles-view/roles-view.component';
import { UsersEditComponent } from './main/blis/users/users-edit/users-edit.component';
import { RolesEditComponent } from './main/blis/roles/roles-edit/roles-edit.component';
import { LoginComponent } from './login/login.component';
import { RealignViewComponent } from './main/blis/realign/realign-view/realign-view.component';
import { BlisComponent } from './main/blis/blis.component';
import { CmsComponent } from './main/cms/cms.component';
import {NavigationComponent} from "./main/blis/navigation/navigation.component";
import { MainComponent } from './main/main.component';
import {LoginService} from "./login/login.service";
import {UsersService} from "./main/blis/users/users.service";
import {GuestGuard} from "./login/guest.guard";
import {LoggedInGuard} from "./login/logged-in.guard";
import {MainService} from "./main/main.service";
import { AppForkComponent } from './main/app-fork/app-fork.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BlisUserGuard} from "./main/blis-user.guard";
import {CmsUserGuard} from "./main/cms-user.guard";
import { SearchPageComponent } from './main/search-page/search-page.component';



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
    NavigationComponent,
    MainComponent,
    AppForkComponent,
    PageNotFoundComponent,
    SearchPageComponent,
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
  providers: [
      GuestGuard,
      LoggedInGuard,
      BlisUserGuard,
      CmsUserGuard,
      LoginService,
      UsersService,
      MainService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
