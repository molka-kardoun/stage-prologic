import { Component, OnInit } from '@angular/core';
import { InternshipOffer } from 'src/app/Core/models/InternshipOffer';
import { TaskStatus } from 'src/app/Core/models/TaskStatus';
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
    endDate: new Date(),
    task: []  // Initialisation du tableau des tâches
  };

  constructor(private offerService: InternshipOfferService) {}

  addTask() {
    this.offer.task!.push({ title: '', description: '', startDate: new Date(), endDate: new Date() });
  }
  removeTask(index: number) {
    this.offer.task!.splice(index, 1);
  }

  createOffer() {
    this.offerService.createInternshipOffer(this.offer).subscribe(response => {
      console.log('Offer created:', response);
    }, error => {
      console.error('Error creating offer:', error);
    });
  }
}
