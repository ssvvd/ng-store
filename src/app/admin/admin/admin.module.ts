import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin.component"
import {MatTableModule} from '@angular/material/table';
import { EditproductComponent } from './editproduct/editproduct.component';


@NgModule({
  declarations: [EditproductComponent],
  imports: [
    CommonModule,
    MatTableModule,
    AdminComponent
  ]
})
export class AdminModule { }
