import { Component, OnInit } from '@angular/core';
import { InternshipOffer } from 'src/app/Core/models/InternshipOffer';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { InternshipOfferService } from 'src/app/Core/Services/internship-offer.service';

@Component({
  selector: 'app-list-internship-offers',
  templateUrl: './list-internship-offers.component.html',
  styleUrls: ['./list-internship-offers.component.css']
})
export class ListInternshipOffersComponent implements OnInit {
  offers: InternshipOffer[] = [];
  id:any;
  user:any;
  isIntern: boolean = false;
  constructor(private offerService: InternshipOfferService ,public auth:AuthService ) {}


  ngOnInit() {
    this.offerService.getAllInternshipOffers().subscribe(offers => {
      this.offers = offers;
    });

    this.id=this.auth.getUserdatafromtoken()._id;
    this.auth.getuserbyid(this.id).subscribe(res=>{
      this.user=res;

      const userData = this.auth.getUserdatafromtoken();
      if (userData && userData.role === 'STAGIAIRE') {
        this.isIntern = true;
      }

  });
  }}
