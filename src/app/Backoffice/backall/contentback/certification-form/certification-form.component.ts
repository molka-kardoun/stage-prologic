import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CertificationService } from '../../../../Core/Services/certification.service';
import { Router } from '@angular/router';
import { Certification } from '../../../../Core/models/Certification';

@Component({
  selector: 'app-certification-form',
  templateUrl: './certification-form.component.html',
  styleUrls: ['./certification-form.component.css']
})
export class CertificationFormComponent implements OnInit {
  certificationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private certificationService: CertificationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.certificationForm = this.fb.group({
      domain: ['', Validators.required],
      date: ['', Validators.required],
      cv: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.certificationForm.valid) {
      const newCertification: Certification = this.certificationForm.value;
      this.certificationService.addCertification(newCertification).subscribe({
        next: (response) => {
          console.log('Certification added successfully', response);
          this.router.navigate(['/certifications']);  // Rediriger vers la liste des certifications
        },
        error: (err) => {
          console.error('Error adding certification', err);
        }
      });
    }
  }
}
