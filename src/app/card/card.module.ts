import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "src/app/card/card.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent,
    CommonModule
  ]
})
export class CardModule { }
