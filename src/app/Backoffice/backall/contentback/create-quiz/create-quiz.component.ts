
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { QuizService } from 'src/app/Core/Services/quiz.service';


@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent {
  quizForm: FormGroup;

  constructor(private fb: FormBuilder, private quizService: QuizService) {
    this.quizForm = this.fb.group({
      description: ['', Validators.required],
      questions: this.fb.array([])
    });
  }

  get questions(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }

  getResponses(questionIndex: number): FormArray {
    return this.questions.at(questionIndex).get('responses') as FormArray;
  }

  addQuestion(): void {
    this.questions.push(this.fb.group({
      text: ['', Validators.required],
      responses: this.fb.array([])
    }));
  }

  addResponse(questionIndex: number): void {
    const responses = this.getResponses(questionIndex);
    responses.push(this.fb.group({
      response: ['', Validators.required],
      isTrue: [false]
    }));
  }

  removeQuestion(index: number): void {
    this.questions.removeAt(index);
  }

  removeResponse(questionIndex: number, responseIndex: number): void {
    const responses = this.getResponses(questionIndex);
    responses.removeAt(responseIndex);
  }

  onSubmit(): void {
    if (this.quizForm.valid) {
      this.quizService.createQuiz(this.quizForm.value).subscribe(response => {
        console.log('Quiz created:', response);
      }, error => {
        console.error('Error creating quiz:', error);
      });
    }
  }
}
