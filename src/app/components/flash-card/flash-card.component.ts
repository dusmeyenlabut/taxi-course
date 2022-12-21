import { Component, Input, OnInit } from '@angular/core';
import { IAnswer } from 'src/app/ianswer';
@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss'],
})
export class FlashCardComponent implements OnInit {
  // showAnswer: boolean = false;
  @Input() title: string;
  @Input() answers: IAnswer[];
  @Input() showAnswer: boolean = false;
  constructor() {}
  ngOnInit(): void {   
  }
  public getAnswer(){
    this.showAnswer = !this.showAnswer;
  }

}
