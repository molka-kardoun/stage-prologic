import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InternshipOffer } from 'src/app/Core/models/InternshipOffer';
import { Quiz } from 'src/app/Core/models/Quiz';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { InternshipOfferService } from 'src/app/Core/Services/internship-offer.service';
import { QuizService } from 'src/app/Core/Services/quiz.service';

@Component({
  selector: 'app-submit-quiz',
  templateUrl: './submit-quiz.component.html',
  styleUrls: ['./submit-quiz.component.css']
})
export class SubmitQuizComponent implements OnInit {
  selectedOffer: InternshipOffer | null = null;
  quiz: Quiz | null = null;
  responses: { questionText: string; responseId: string | null }[] = [];
  userId: string | null = null;
  errorMessage: string | null = null;
  score: number | null = null;
  constructor(
    private internshipOfferService: InternshipOfferService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserdatafromtoken()?._id || null;

    this.route.paramMap.subscribe(paramMap => {
      const offerId = paramMap.get('id');
      if (offerId) {
        this.loadQuizAndOffer(offerId);
      }
    });
  }

  private loadQuizAndOffer(offerId: string): void {
    this.internshipOfferService.getQuizForOffer(offerId).subscribe(
      quiz => {
        this.quiz = quiz;
        this.responses = this.quiz.questions.map(q => ({ questionText: q.text, responseId: null }));
      },
      error => {
        console.error('Error loading quiz:', error);
        this.errorMessage = 'There was an error loading the quiz. Please try again later.';
      }
    );

    this.internshipOfferService.getAllInternshipOffers().subscribe(
      offers => {
        this.selectedOffer = offers.find(offer => offer._id === offerId) || null;
      },
      error => {
        console.error('Error loading internship offers:', error);
        this.errorMessage = 'There was an error loading the internship offers. Please try again later.';
      }
    );
  }

  updateResponse(questionIndex: number, responseId: string): void {

    this.responses[questionIndex].responseId = responseId;
    console.log(`Updated response for question ${questionIndex} to ${responseId}`);
  }

  submitQuiz(): void {
    if (this.userId && this.selectedOffer) {
      const allAnswered = this.responses.every(response => response.responseId !== null);

      if (allAnswered) {
        const payload = {
          userId: this.userId,
          offerId: this.selectedOffer._id!,
          responses: this.responses
        };

        console.log('Payload to be sent:', payload);

        this.quizService.submitQuiz(payload.userId, payload.offerId, payload.responses).subscribe(
          evaluation => {
            console.log('Quiz submitted successfully', evaluation);
            this.score = evaluation.score;
          },
          error => {
            console.error('Error submitting quiz:', error);
            this.errorMessage = 'There was an error submitting the quiz. Please try again later.';
          }
        );
      } else {
        this.errorMessage = 'Please answer all the questions before submitting.';
      }
    } else {
      this.errorMessage = 'User ID or Internship Offer is missing.';
    }
  }
}
