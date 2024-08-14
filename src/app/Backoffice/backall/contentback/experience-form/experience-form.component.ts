import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienceService } from '../../../../Core/Services/experience.service';
import { Router } from '@angular/router';
import { Experience } from '../../../../Core/models/Experience';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css']
})
export class ExperienceFormComponent implements OnInit {
  experienceForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private experienceService: ExperienceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.experienceForm = this.fb.group({
      company: ['', Validators.required],
      job: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      description: ['', Validators.required],
      cv: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.experienceForm.valid) {
      const newExperience: Experience = this.experienceForm.value;
      this.experienceService.addExperience(newExperience).subscribe({
        next: (response) => {
          console.log('Experience added successfully', response);
          this.router.navigate(['/experiences']);  // Rediriger vers la liste des expériences
        },
        error: (err) => {
          console.error('Error adding experience', err);
        }
      });
    }
  }
}
