import { Component } from '@angular/core';
import { Card } from "src/app/card/card";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cards with Cats ';

  cards: Card[] = [
    new Card(1, false, null),
    new Card(2, false, null),
    new Card(3, false, null),
    new Card(4, false, null)
  ];
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

}
