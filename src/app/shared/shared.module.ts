import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { MaterialModule } from '../material/material.module';
import { ProductformComponent } from './componenets/productform/productform.component';

@NgModule({
  declarations: [CardComponent, ProductformComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[CardComponent]
})
export class SharedModule { }
