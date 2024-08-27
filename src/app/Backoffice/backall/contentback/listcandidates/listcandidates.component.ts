import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { InternshipOfferService } from 'src/app/Core/Services/internship-offer.service';

@Component({
  selector: 'app-listcandidates',
  templateUrl: './listcandidates.component.html',
  styleUrls: ['./listcandidates.component.css']
})
export class ListcandidatesComponent implements OnInit {

  detailedOffers: any[] = [];
  



constructor(private internshipOfferService: InternshipOfferService,public auth:AuthService,
  private act:ActivatedRoute ) {}

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


}

