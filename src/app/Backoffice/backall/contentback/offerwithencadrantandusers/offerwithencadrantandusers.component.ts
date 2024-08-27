import { Component, OnInit } from '@angular/core';
import { InternshipOfferService } from 'src/app/Core/Services/internship-offer.service';

@Component({
  selector: 'app-offerwithencadrantandusers',
  templateUrl: './offerwithencadrantandusers.component.html',
  styleUrls: ['./offerwithencadrantandusers.component.css']
})
export class OfferwithencadrantandusersComponent implements OnInit {

  offers: any[] = [];

  constructor(private internshipOfferService: InternshipOfferService) { }

  ngOnInit(): void {
    this.internshipOfferService.getOffersWithEncadrantAndAcceptedUsers().subscribe(
      (data) => {
        this.offers = data;
      },
      (error) => {
        console.error('Error fetching offers:', error);
      }
    );
  }
}
