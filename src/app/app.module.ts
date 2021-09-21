import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ShowProductComponent } from './product/show-product/show-product.component';
import { AddEditProductComponent } from './product/add-edit-product/add-edit-product.component';
import { CategoryComponent } from './category/category.component';
import { ShowCategoryComponent } from './category/show-category/show-category.component';
import { AddEditCategoryComponent } from './category/add-edit-category/add-edit-category.component';
import { SharedService } from './shared.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ShowProductComponent,
    AddEditProductComponent,
    CategoryComponent,
    ShowCategoryComponent,
    AddEditCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
