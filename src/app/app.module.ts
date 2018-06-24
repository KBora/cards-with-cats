import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CatsService } from "src/app/shared/cats.service";
import { HttpClientModule } from "@angular/common/http";
import { StateService } from "src/app/shared/state.service";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CatsService,
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
