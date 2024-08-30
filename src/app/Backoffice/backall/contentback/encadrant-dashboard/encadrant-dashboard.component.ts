import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { InternshipOfferService } from 'src/app/Core/Services/internship-offer.service';

@Component({
  selector: 'app-encadrant-dashboard',
  templateUrl: './encadrant-dashboard.component.html',
  styleUrls: ['./encadrant-dashboard.component.css']
})
export class EncadrantDashboardComponent implements OnInit {
  offers: any[] = [];

  constructor(
    private authService: AuthService,
    private internshipOfferService: InternshipOfferService
  ) {}

  ngOnInit(): void {
    const userData = this.authService.getUserdatafromtoken();

    if (userData && userData.role === 'ENCADRANT') {
      this.internshipOfferService.getUsersofferForEncadrant(userData._id).subscribe(
        (data) => {
          this.offers = data;
        },
        (error) => {
          console.error('Error fetching users for encadrant:', error);
        }
      );
    }
  }
}
