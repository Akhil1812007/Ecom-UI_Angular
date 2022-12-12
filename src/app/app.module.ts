import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailsGetComponent } from './product.component/product-details-get/product-details-get.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductGetDetailsByIdComponent } from './product.component/product-get-details-by-id/product-get-details-by-id.component';
import { AddNewProductComponent } from './product.component/add-new-product/add-new-product.component';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './product.component/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsGetComponent,
    ProductGetDetailsByIdComponent,
    AddNewProductComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
