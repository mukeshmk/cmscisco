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
import { RealignmentComponent } from './realignment/realignment.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { OrdercountComponent } from './ordercount/ordercount.component';
import { Routing} from './app.routing';
import { ViewOrganizationComponent } from './view-organization/view-organization.component';
import { NgSemanticModule } from "ng-semantic";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountsComponent,
    OrganizationComponent,
    OrdersComponent,
    SearchComponent,
    RealignmentComponent,
    NavigationbarComponent,
    OrdercountComponent,
    ViewOrganizationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    NgSemanticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
