import { Component, OnInit } from '@angular/core';
import { InternStatus } from 'src/app/Core/models/InternStatus';
import { InternshipOfferService } from 'src/app/Core/Services/internship-offer.service';


@Component({
  selector: 'app-detailed-internship-offers',
  templateUrl: './detailed-internship-offers.component.html',
  styleUrls: ['./detailed-internship-offers.component.css']
})
export class DetailedInternshipOffersComponent implements OnInit {

  detailedOffers: any[] = [];
  internStatuses = Object.values(InternStatus);

  constructor(private internshipOfferService: InternshipOfferService) {}

  ngOnInit(): void {
    this.fetchDetailedOffers();
  }

  // Fonction pour récupérer les offres détaillées
  fetchDetailedOffers(): void {
    this.internshipOfferService.getDetailedInternshipOffers().subscribe(
      (data: any[]) => {
        this.detailedOffers = data;
      },
      (error) => {
        console.error('Error fetching detailed internship offers', error);
      }
    );
  }





}
