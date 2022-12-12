import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductComponent } from './product.component/add-new-product/add-new-product.component';
import { EditProductComponent } from './product.component/edit-product/edit-product.component';
import { ProductDetailsGetComponent } from './product.component/product-details-get/product-details-get.component';
import { ProductGetDetailsByIdComponent } from './product.component/product-get-details-by-id/product-get-details-by-id.component';

const routes: Routes = [
  {
    path:'getProductById/:id',
    component: ProductGetDetailsByIdComponent
  },
  {
    path:'',
    component:ProductDetailsGetComponent
  },
  {
    path:'product/add',
    component:AddNewProductComponent
  },
  {
    path:'product/edit/:id',
    component:EditProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
