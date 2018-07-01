import { Component, OnInit } from '@angular/core';
import { CatsService} from '../services/services.module';
import { StateService } from "../services/state.service";

import { Card } from "src/app/card/card";
import { Cat } from "src/app/services/cat";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private catsService: CatsService, 
    private stateService: StateService) { }

  ngOnInit() {
  }

  title = 'Cards with Cats';
  
    cards: Card[] = [
      new Card(1, false, null),
      new Card(2, false, null),
      new Card(3, false, null),
      new Card(4, false, null)
    ];
  
    cats: Cat[];
  
    activeCard: Card = null;
  
    private activeCardPresent() {
      return this.activeCard !== null;
    }
  
    private nextCardOrder() {
      return this.cards.length + 1;
    }
  
    onClickCard(card) {
  
      // Toggle active card if one exists and is not the card that was clicked on
      if (this.activeCardPresent() && this.activeCard !== card) {
        this.activeCard.toggleStatus();
      }
  
      // Reset active card
      this.activeCard = null;
  
      // Toggle card
      card.toggleStatus();
  
      // Mark state
      if (card.isActive) {
        this.activeCard = card;
      }
  
    }
  
    getCats() {
      // set fetch status
      this.stateService.fetchingCats = true;
      this.stateService.imagesToLoad = this.cards.length;
  
      this.catsService.getCats(this.cards.length)
        .subscribe(data => {
          this.cats = data;
  
          // load cat url into card
          this.cats.forEach((cat, index) => {
            this.cards[index].setImage(cat.url);
          });
  
          // set fetch status
          //this.stateService.fetchingCats = false; // to do: set fetchstatus  after all images are loaded
  
        }, error => console.log('Unable to getCats'))
    }
  
    addCard() {
      this.cards.push(new Card(this.nextCardOrder(), false, null));
    }

}
