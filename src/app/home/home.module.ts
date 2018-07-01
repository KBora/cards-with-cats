import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CardModule } from "src/app/card/card.module";

@NgModule({
  imports: [
    CardModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
