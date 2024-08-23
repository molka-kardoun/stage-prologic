import { Component, OnInit } from '@angular/core';
import { InternshipOfferService } from 'src/app/Core/Services/internship-offer.service';
import { InternStatus } from 'src/app/Core/models/InternStatus';

@Component({
  selector: 'app-detailed-internship-offers',
  templateUrl: './detailed-internship-offers.component.html',
  styleUrls: ['./detailed-internship-offers.component.css']
})
export class DetailedInternshipOffersComponent implements OnInit {

  detailedOffers: any[] = [];
  statuses = Object.values(InternStatus); // Liste des statuts possibles

  constructor(private internshipOfferService: InternshipOfferService) {}

  ngOnInit(): void {
    this.fetchDetailedOffers();
  }

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

  updateStatus(userId: string, newStatus: string): void {
    this.internshipOfferService.updateUserStatus(userId, newStatus).subscribe(
      () => {
        console.log(`User status updated successfully for user ${userId}`);
      },
      (error) => {
        console.error('Error updating user status', error);
      }
    );
  }
}
