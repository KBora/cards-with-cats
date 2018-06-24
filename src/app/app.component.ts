import { Component } from '@angular/core';
import { Card } from "src/app/card/card";
import { CatsService } from "src/app/shared/cats.service";
import { Cat } from "src/app/shared/cat";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private catsService: CatsService) { }
    
  title = 'Cards with Cats ';

  cards: Card[] = [
    new Card(1, false, null),
    new Card(2, false, null),
    new Card(3, false, null),
    new Card(4, false, null)
  ];

  cats: Object[];
  
  activeCard: Card = null;
  fetchingCats: boolean = false;

  private activeCardPresent() {
    return this.activeCard !== null;
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
    this.catsService.getCats(this.cards.length)
        .subscribe(data => {
            this.cats = data;
            console.log(this.cats);
            // TO DO: load cats into cards
            // set fetch status
            this.cats.forEach((cat, index)  => {
              this.cards[index].setImage( cat );
              console.log( cat);
              console.log(this.cards[index]);
            });
        }, error => console.log('Unable to getCats'))
}

}
