import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { InternshipOfferService } from 'src/app/Core/Services/internship-offer.service';
import { TaskService } from 'src/app/Core/Services/task.service';

@Component({
  selector: 'app-validate-intern',
  templateUrl: './validate-intern.component.html',
  styleUrls: ['./validate-intern.component.css']
})
export class ValidateInternComponent implements OnInit {
  stagiaires: any[] = [];
  message: string = '';

  constructor(private internService: TaskService, private authService: AuthService,private offerService: InternshipOfferService) {}

  ngOnInit() {
    const encadrantId = this.authService.getUserdatafromtoken()._id;
    this.offerService.getUsersForEncadrant(encadrantId).subscribe(
      data => this.stagiaires = data,
      error => this.message = 'Error while loading interns .'
    );
  }

  onValidate(stagiaireId: string) {
    const encadrantId = this.authService.getUserdatafromtoken()._id;
    this.internService.validateIntern(encadrantId, stagiaireId).subscribe(
      response => this.message = '  Intern validated sucessfully !',
      error => this.message = 'Error while validating intern .'
    );
  }

}
