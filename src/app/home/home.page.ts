import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IQuestion } from '../iquestion';
import { Observable } from 'rxjs';
import { IAnswer } from '../ianswer';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  questions: any = [];
  title: string = "";
  questionNumber: number = 0;
  answers: IAnswer[] = [];
  constructor(public http: HttpClient) { }
  showAnswer: boolean = false
  ngOnInit() {
    this.http.get<IQuestion>("assets/data/taxi-course-qa.json").subscribe(data => {
      console.log(data);
      this.questions = data;
      this.title = this.questions[this.questionNumber].question;
      this.questionNumber = this.questions[this.questionNumber].number;
      this.answers = this.questions[this.questionNumber].answers;
    })
  }
  getQuestions(): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>("assets/data/taxi-course-qa.json");
  }
  getQuestion() {
    this.showAnswer = !this.showAnswer;
  }
  getNextQuestion() {
    console.log(this.questionNumber);
    this.questionNumber++;
    this.http.get<IQuestion>("assets/data/taxi-course-qa.json").subscribe(data => {
      console.log(data);
      this.questions = data;
      this.title = this.questions[this.questionNumber].question;
      this.questionNumber = this.questions[this.questionNumber].number;
      this.answers = this.questions[this.questionNumber].answers;
    })
  }
}
