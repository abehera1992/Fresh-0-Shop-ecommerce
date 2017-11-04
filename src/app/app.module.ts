import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular-4-data-table';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CustomFormsModule } from 'ng2-validation';

import { environment } from './../environments/environment';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductsComponent } from './products/products.component';
import { AuthAdminGuard } from './admin/services/auth-admin-guard.service';
import { AuthGuard } from './shared/services/auth-guard.service';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    LoginComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    SharedModule,
    FormsModule,
    DataTableModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path:'', component: HomeComponent },
      { path:'products', component: ProductsComponent },
      { path:'shopping-cart', component: ShoppingCartComponent },
      { path:'login', component: LoginComponent },

      { path:'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
      { path:'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
      { path:'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },

      {
        path:'admin/products/new',
        component: ProductFormComponent, 
        canActivate: [AuthGuard, AuthAdminGuard] 
     },
     {
      path:'admin/products/:id',
      component: ProductFormComponent, 
      canActivate: [AuthGuard, AuthAdminGuard] 
     },
     {
      path:'admin/products',
      component: AdminProductsComponent, 
      canActivate: [AuthGuard, AuthAdminGuard] 
     },

      { path:'admin/orders',
        component: AdminOrdersComponent, 
        canActivate: [AuthGuard, AuthAdminGuard]  
      },

    ])
  ],
  providers: [
    AuthAdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
