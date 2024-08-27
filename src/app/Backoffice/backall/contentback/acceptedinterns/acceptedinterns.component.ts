import { Component, OnInit } from '@angular/core';
import { InternshipOfferService } from 'src/app/Core/Services/internship-offer.service';

@Component({
  selector: 'app-acceptedinterns',
  templateUrl: './acceptedinterns.component.html',
  styleUrls: ['./acceptedinterns.component.css']
})
export class AcceptedinternsComponent  implements OnInit {

  offers: any[] = [];

  constructor(private internshipOfferService: InternshipOfferService) { }

  ngOnInit(): void {
    this.internshipOfferService.getAcceptedUsersForOffers().subscribe(
      (data) => {
        this.offers = data;
      },
      (error) => {
        console.error('Error fetching internship offers with accepted users:', error);
      }
    );
  }
}
