import { AuthGuard } from './../shared/services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular-4-data-table';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthAdminGuard } from 'app/admin/services/auth-admin-guard.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataTableModule,
    RouterModule.forChild([
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
  declarations: [
    ProductFormComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
  ],
  providers: []
})
export class AdminModule { }
