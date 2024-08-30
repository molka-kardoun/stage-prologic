import { Component, OnInit, Input, Output, EventEmitter, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExperienceService } from '../../../../Core/Services/experience.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../Core/Services/auth.service';
import { Experience } from '../../../../Core/models/Experience';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; // Import MatDialogRef and MAT_DIALOG_DATA
@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css']
})
export class ExperienceFormComponent implements OnInit {
  @Input() experience?: Experience; // Receive the experience to edit
  @Output() experienceUpdated = new EventEmitter<Experience>();

  experienceForm!: FormGroup;
  userId!: string;

  constructor(
    private fb: FormBuilder,
    private experienceService: ExperienceService,
    private router: Router,
    private authService: AuthService,
  
    @Optional() public dialogRef: MatDialogRef<ExperienceFormComponent>, // Make MatDialogRef optional
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { experience?: Experience } // Make MAT_DIALOG_DATA optional
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserdatafromtoken()._id;
    this.initializeForm();

    if (this.data.experience) {
      this.experienceForm.patchValue(this.data.experience); // Populate the form if editing
    }
 
  }



  initializeForm(): void {
    this.experienceForm = this.fb.group({
      company: ['', Validators.required],
      job: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  onSubmit(): void {
    if (this.experienceForm.valid) {
      const formData: Experience = {
        ...this.experienceForm.value,
        start_date: new Date(this.experienceForm.value.start_date),
        end_date: new Date(this.experienceForm.value.end_date),
        userId: this.userId
      };

      if (this.data.experience) {
        this.experienceService.updateExperience(this.data.experience._id!, formData).subscribe({
          next: (updatedExperience) => {
            this.dialogRef.close(updatedExperience); // Close the dialog and pass the updated experience back
          },
          error: (err: any) => {
            console.error('Error updating experience:', err);
          }
        });
      } else {
        this.experienceService.addExperience(formData).subscribe({
          next: (newExperience) => {
            this.dialogRef.close(newExperience); // Close the dialog and pass the new experience back
          },
          error: (err: any) => {
            console.error('Error adding experience:', err);
          }
        });
      }
    } else {
      console.log('Form is invalid');
    }
  }

  onCancel(): void {
    this.dialogRef.close(); // Close the dialog without any action
  }
}
