import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../Core/Services/auth.service';
import { CvService } from '../../../../Core/Services/cv.service';
import { CV } from '../../../../Core/models/CV';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  cv: CV | undefined;
  showCVForm = false;  // Define the property

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserdatafromtoken()._id;
    this.authService.getuserbyid(userId).subscribe(user => {
      this.user = user;
      this.cvService.getCVByUserId(userId).subscribe(cv => {
        this.cv = cv;
      });
    });
  }

  toggleCVForm(): void {
    this.showCVForm = !this.showCVForm;  // Define the method
  }

  onCVSaved(cv: CV): void {
    this.cv = cv;  // Define the method
    this.showCVForm = false;
  }
}
