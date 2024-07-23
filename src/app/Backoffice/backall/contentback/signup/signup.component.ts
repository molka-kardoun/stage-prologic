import { Component } from '@angular/core';
import { InternStatus } from 'src/app/Core/models/InternStatus';
import { Roles } from 'src/app/Core/models/Roles';
import { User } from 'src/app/Core/models/User';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  step: number = 1;

  user: User = {
    _id: '',
    fullName: '',
    phone: '',
    email: '',
    password: '',
    role: Roles.ASSISTANT,
    image: '',
    nationality: '',
    dateOfBirth: '',
    address: '',
    department: '',
    gender: '',
    isEnabled: true,
    cv: null,
    creationDate: new Date(),
    status: InternStatus.DECLINED,
    forgetPassword: null,
    lab: null,
    internshipOffer: null
  };

  selectedFile: File | null = null;

  constructor(private authService: AuthService) {}

  select(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  nextStep(): void {
    if (this.step < 3) {
      this.step++;
    }
  }

  previousStep(): void {
    if (this.step > 1) {
      this.step--;
    }
  }

  register(): void {
    const formData: FormData = new FormData();
    formData.append('fullName', this.user.fullName);
    formData.append('phone', this.user.phone);
    formData.append('email', this.user.email);
    formData.append('password', this.user.password);
    formData.append('nationality', this.user.nationality);
    formData.append('dateOfBirth', this.user.dateOfBirth);
    formData.append('address', this.user.address);
    formData.append('department', this.user.department);
    formData.append('gender', this.user.gender);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

    this.authService.register(formData).subscribe(
      response => {
        console.log('User registered successfully:', response);
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }
}
