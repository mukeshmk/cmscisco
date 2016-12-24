import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { OrganizationComponent } from './organization/organization.component';
import { OrdersComponent } from './orders/orders.component';
import { SearchComponent } from './search/search.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { OrdercountComponent } from './ordercount/ordercount.component';
import { Routing} from './app.routing';
import { ViewOrganizationComponent } from './view-organization/view-organization.component';
import { NgSemanticModule } from "ng-semantic";
import { Ng2PaginationModule} from 'ng2-pagination';
import { CreateOrgFormComponent } from './organization/create-org-form/create-org-form.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountsComponent,
    OrganizationComponent,
    OrdersComponent,
    SearchComponent,
    NavigationbarComponent,
    OrdercountComponent,
    ViewOrganizationComponent,
    CreateOrgFormComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    NgSemanticModule,
    Ng2PaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
