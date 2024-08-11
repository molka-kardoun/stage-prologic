import { Component, OnInit } from '@angular/core';
import { InternshipOffer } from 'src/app/Core/models/InternshipOffer';
import { InternshipOfferService } from 'src/app/Core/Services/internship-offer.service';
import { QuizService } from 'src/app/Core/Services/quiz.service';

@Component({
  selector: 'app-internship-offer',
  templateUrl: './internship-offer.component.html',
  styleUrls: ['./internship-offer.component.css']
})
export class InternshipOfferComponent  {

  offer: InternshipOffer = {
    title: '',
    description: '',
    technologies: '',
    startDate: new Date(),
    endDate: new Date()
  };

  constructor(private offerService: InternshipOfferService) {}

  createOffer() {
    this.offerService.createInternshipOffer(this.offer).subscribe(response => {
      console.log('Offer created:', response);
    }, error => {
      console.error('Error creating offer:', error);
    });
  }
}
