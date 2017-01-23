import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { ViewaccountDataRowComponent } from './accounts/viewaccount-data-row/viewaccount-data-row.component';
import { AccountNewComponent } from './accounts/account-new/account-new.component';
import { AccountDetailsComponent } from './accounts/account-new/accountForm/account-details/account-details.component';
import { AccountAddressComponent } from './accounts/account-new/accountForm/account-address/account-address.component';
import { AccountAgentsComponent } from './accounts/account-new/accountForm/account-agents/account-agents.component';
import { AccountContactsComponent } from './accounts/account-new/accountForm/account-contacts/account-contacts.component';
import { AccountContactsBusinessComponent } from './accounts/account-new/accountForm/account-contacts-business/account-contacts-business.component';
import { AccountEditComponent } from './accounts/account-edit/account-edit.component';
import { AccountAddressEditComponent } from './accounts/account-edit/account-address-edit/account-address-edit.component';
import { AccountPaymentDetailComponent } from './accounts/account-edit/account-payment-detail/account-payment-detail.component';
import { AccountViewActivityNotesComponent } from './accounts/account-edit/account-view-activity-notes/account-view-activity-notes.component';


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
    AccountDetailsComponent,
    AccountAddressComponent,
    AccountAgentsComponent,
    AccountContactsComponent,
    AccountContactsBusinessComponent,
    AccountEditComponent,
    AccountAddressEditComponent,
    AccountPaymentDetailComponent,
    AccountViewActivityNotesComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
