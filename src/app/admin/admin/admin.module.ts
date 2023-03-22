import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from "./admin.component"
import {MatTableModule} from '@angular/material/table';
import { EditproductComponent } from './editproduct/editproduct.component';
import {SharedModule} from "../../shared/shared.module"
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [AdminComponent, EditproductComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MaterialModule,
    SharedModule
  ]
})
export class AdminModule { }
