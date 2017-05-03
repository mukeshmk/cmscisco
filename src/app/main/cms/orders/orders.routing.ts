import {OrdersNewComponent} from "./orders-new/orders-new.component";
import {OrdersEditComponent} from "./orders-edit/orders-edit.component";
import {ViewOrdersComponent} from "./view-orders/view-orders.component";
export let OrderRoutes = [
  {
    path : '',
    component : ViewOrdersComponent
  },
  {
    path : 'new/:ordID',
    component : OrdersNewComponent
  },
  {
    path : 'edit/:ordID',
    component : OrdersEditComponent
  }
]
