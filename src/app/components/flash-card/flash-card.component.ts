import { Component, ViewChild } from '@angular/core';
import { IonTitle } from '@ionic/angular';
@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss'],
})
export class FlashCardComponent {
  flipped: boolean = false;
  constructor() {}
  flip() {
    this.flipped = !this.flipped;
  }
}
