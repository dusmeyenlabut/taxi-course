import { Component, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild("slides") slides:any;
  score: number = 0;
  questions: any = [];
  hasAnswered: boolean = false;
  slideOptions: any;
  constructor(
    private http: HttpClient
  ) {}
  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    this.getQuestions().subscribe(res => {
      console.log(res);
      this.questions = res;
    })
  }
  nextSlide(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }
  getQuestions() {
    return this.http.get("../assets/data/questions.json").pipe(
      map((res:any)=> {
        return res.questions;
      })
    );
  }
  restartQuiz() {
    this.score = 0;
    this.slides.lockSwipes(false);
    this.slides.slideTo(1, 1000);
    this.slides.lockSwipes(true);
  }
  selectAnswer(answer:any, question:any){
    this.hasAnswered = true;
    answer.selected = true;
    question.flashCardFlipped = true;
    if(answer.correct){
        this.score++;
    }
    setTimeout(() => {
        this.hasAnswered = false;
        this.nextSlide();
        answer.selected = false;
        question.flashCardFlipped = false;
    }, 3000);
  }
  randomizeAnswers(rawAnswers: any[]): any[] {
    for (let i = rawAnswers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = rawAnswers[i];
        rawAnswers[i] = rawAnswers[j];
        rawAnswers[j] = temp;
    }
    return rawAnswers;
  }
}
