import { Component, OnInit } from '@angular/core';
import { InternshipOfferService } from 'src/app/Core/Services/internship-offer.service';

@Component({
  selector: 'app-assign-encadrant',
  templateUrl: './assign-encadrant.component.html',
  styleUrls: ['./assign-encadrant.component.css']
})
export class AssignEncadrantComponent implements OnInit {
  encadrants: any[] = [];
  offers: any[] = [];
  selectedEncadrant: string = '';
  selectedOffer: string = '';

  constructor(private internshipService: InternshipOfferService) { }

  ngOnInit(): void {
    this.loadEncadrants();
    this.loadOffers();
  }

  loadEncadrants() {
    this.internshipService.getUsersWithRoleEncadrant().subscribe(encadrants => {
      this.encadrants = encadrants;
    });
  }

  loadOffers() {
    this.internshipService.getAllInternshipOffers().subscribe(offers => {
      this.offers = offers;
    });
  }

  assignEncadrant() {
    if (this.selectedEncadrant && this.selectedOffer) {
      this.internshipService.assignEncadrantToOffer(this.selectedEncadrant, this.selectedOffer).subscribe(response => {
        alert('Encadrant assigned successfully!');
      });
    } else {
      alert('Please select both an encadrant and an offer.');
    }
  }
}
