import { Component, Input } from '@angular/core';

@Component({
  selector: 'flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss'],
})
export class FlashCardComponent{

  @Input('isFlipped') flipCard: boolean;
  constructor() { }

}
