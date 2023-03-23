import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin/admin.component';
import {AdminModule} from "./admin/admin/admin.module";
import { SidebarComponent } from './components/sidebar/sidebar.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    MaterialModule,
    HttpClientModule,
    AdminModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
