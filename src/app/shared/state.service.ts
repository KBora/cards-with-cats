import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  fetchingCats: boolean = false;

  imagesToLoad: number = 0;

  imageLoaded() {
    this.imagesToLoad--;
    if (this.imagesToLoad === 0) {
      this.fetchingCats = false;
    }
  }
}
