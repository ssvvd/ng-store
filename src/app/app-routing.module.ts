import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/components/home/home.component"
import {AdminComponent} from "./admin/admin/admin.component"
import {EditproductComponent} from "./admin/admin/editproduct/editproduct.component"
const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch: "full"},
  {path:"admin",component:AdminComponent},
  {path:"admin/edit/:id",component:EditproductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
