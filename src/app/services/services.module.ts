import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsService } from "./cats.service";
import { StateService } from "src/app/services/state.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: []
})
export class ServicesModule { 
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [
        CatsService,
        StateService
      ]
    }
  }
}

export {
  CatsService,
  StateService
}
