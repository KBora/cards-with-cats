import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { StateService } from "src/app/shared/state.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() order: number;
  @Input() isActive: boolean;
  @Input() urlCatImage: string

  @Output() clickCard = new EventEmitter();

  constructor( private stateService: StateService) { }

  ngOnInit() {
  }

  imageLoaded() {
    this.stateService.imageLoaded();
  }

}
