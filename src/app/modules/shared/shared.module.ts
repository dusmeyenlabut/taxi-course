import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from 'src/app/components/question/question.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FlashCardComponent } from 'src/app/components/flash-card/flash-card.component';



@NgModule({
  declarations: [QuestionComponent, HeaderComponent, FlashCardComponent],
  imports: [
    CommonModule
  ],
  exports: [QuestionComponent, HeaderComponent, FlashCardComponent],
})
export class SharedModule { }
