import { Component } from '@angular/core';
import { Card } from "src/app/card/card";
import { CatsService } from "src/app/shared/cats.service";
import { Cat } from "src/app/shared/cat";
import { StateService } from "src/app/shared/state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private catsService: CatsService, 
    private stateService: StateService) { }

  title = 'Cards with Cats';

  cards: Card[] = [
    new Card(1, false, null),
    new Card(2, false, null),
    new Card(3, false, null),
    new Card(4, false, null)
  ];

  catUrls: string[];

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

    this.catsService.getCats(this.cards.length)
      .subscribe(data => {
        this.catUrls = data;

        // load cat url into card
        this.catUrls.forEach((catUrl, index) => {
          this.cards[index].setImage(catUrl);
        });

        // set fetch status
         this.stateService.fetchingCats = false; // to do: set fetchstatus  after all images are loaded

      }, error => console.log('Unable to getCats'))
  }

  addCard() {
    this.cards.push(new Card(this.nextCardOrder(), false, null));
  }

}
