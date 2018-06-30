import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from "src/app/home/home.module";
import { ServicesModule } from "src/app/services/services.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    ServicesModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
