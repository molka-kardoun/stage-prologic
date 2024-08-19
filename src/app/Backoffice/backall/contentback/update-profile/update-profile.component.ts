import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { InternStatus } from 'src/app/Core/models/InternStatus';
import { Roles } from 'src/app/Core/models/Roles';
import { User } from 'src/app/Core/models/User';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

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
    creationDate: new Date(),
    status: InternStatus.DECLINED
  };

  selectedFile: File | null = null;
  id: string | null = null; // Pour stocker l'ID de l'utilisateur

  constructor(private authService: AuthService, private router: Router, private act: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'utilisateur depuis les paramètres de l'URL
    this.id = this.act.snapshot.paramMap.get('id');

    if (this.id) {
      // Charger les informations actuelles de l'utilisateur via l'ID
      this.authService.getuserbyid(this.id).subscribe(
        (response: any) => {
          this.user = response;
        },
        error => {
          console.error('Error fetching user data!', error);
        }
      );
    }
  }

  select(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  updateProfile(): void {
    const formData: FormData = new FormData();
    formData.append('fullName', this.user.fullName);
    formData.append('phone', this.user.phone);
    formData.append('email', this.user.email);
    formData.append('nationality', this.user.nationality);
    formData.append('dateOfBirth', this.user.dateOfBirth);
    formData.append('address', this.user.address);
    formData.append('department', this.user.department);
    formData.append('gender', this.user.gender);
    if (this.user.password) {
      formData.append('password', this.user.password);
    }
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

    if (this.id) {
      this.authService.updateProfile(this.id, formData).subscribe(
        response => {
          console.log('User profile updated successfully:', response);
          this.router.navigate(['/home/profile', this.user._id]);

        },
        error => {
          console.error('There was an error updating the profile!', error);
        }
      );
    }
  }
}
