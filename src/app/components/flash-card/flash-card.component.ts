import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IQuestion } from '../../iquestion';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss'],
})
export class FlashCardComponent implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  showAnswer: boolean = false;
  questions: any = [];
  title: string = "";
  questionNumber: number = 0;
  answers: any = [];
  constructor(public http: HttpClient) {}
  ngOnInit(): void {   
    this.http.get<IQuestion>("assets/data/taxi-course-qa.json").subscribe(data =>{
      console.log(data);
      this.questions = data;
      this.title = this.questions[0].question;
      this.questionNumber = this.questions[0].number;
      this.answers = this.questions[0].answers;
    })
  }
  getQuestions(): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>("assets/data/taxi-course-qa.json");
  }
  public getAnswer(){
    this.showAnswer = !this.showAnswer;
  }
  getData() {
    console.log("Test");
    return "Test2";
    return this.http.get('assets/data/taxi-course-qa.json').pipe(
      map((response:any) => response.json()
      ));
    // .map(res => res.json()).subscribe(res => {
    //       this.data = res.menuItems;
    //       console.log(this.data);
    //     },
    //     (err) => {
    //       alert('failed loading json data');
    //     });
  }
}
