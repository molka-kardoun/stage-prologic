import { Component, OnInit } from '@angular/core';
import { InternshipOffer } from 'src/app/Core/models/InternshipOffer';
import { Quiz } from 'src/app/Core/models/Quiz';
import { InternshipOfferService } from 'src/app/Core/Services/internship-offer.service';
import { QuizService } from 'src/app/Core/Services/quiz.service';

@Component({
  selector: 'app-assign-quiz-to-offer',
  templateUrl: './assign-quiz-to-offer.component.html',
  styleUrls: ['./assign-quiz-to-offer.component.css']
})
export class AssignQuizToOfferComponent implements OnInit {
  offers: InternshipOffer[] = [];
  quizzes: Quiz[] = [];
  selectedOfferId!: string;
  selectedQuizId!: string;

  constructor(
    private offerService: InternshipOfferService,
    private quizService: QuizService
  ) {}

  ngOnInit() {
    this.offerService.getAllInternshipOffers().subscribe(offers => {
      this.offers = offers;
    });

    this.quizService.getQuizzes().subscribe(quizzes => {
      this.quizzes = quizzes;
    });
  }

  assignQuiz() {
    this.offerService.assignQuizToOffer(this.selectedOfferId, this.selectedQuizId).subscribe(response => {
      console.log('Quiz assigned to offer:', response);
    }, error => {
      console.error('Error assigning quiz:', error);
    });
  }
}
