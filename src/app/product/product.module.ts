import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,MaterialModule
  ]
})
export class ProductModule { }
