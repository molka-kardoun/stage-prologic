import { Component, OnInit, Input, Output, EventEmitter, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducationService } from '../../../../Core/Services/education.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Education } from '../../../../Core/models/Education';
import { AuthService } from '../../../../Core/Services/auth.service';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent implements OnInit {
  @Input() education?: Education; // Education to edit
  @Output() educationUpdated = new EventEmitter<Education>();

  educationForm!: FormGroup;
  userId!: string;

  constructor(
    private fb: FormBuilder,
    @Inject(EducationService) private educationService: EducationService,
    private authService: AuthService,
    @Optional() public dialogRef: MatDialogRef<EducationFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { education?: Education }
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserdatafromtoken()._id;
    this.initializeForm();

    // Si une éducation est passée en paramètre, pré-remplir le formulaire
    if (this.data.education) {
      this.educationForm.patchValue(this.data.education);
    }
  }

  initializeForm(): void {
    this.educationForm = this.fb.group({
      etablissement: ['', Validators.required],
      domaine: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.educationForm.valid) {
      const formData: Education = {
        ...this.educationForm.value,
        start_date: new Date(this.educationForm.value.start_date),
        end_date: new Date(this.educationForm.value.end_date),
        userId: this.userId
      };

      if (this.data.education) {
        // Mise à jour d'une éducation existante
        this.educationService.updateEducation(this.data.education._id!, formData).subscribe({
          next: (updatedEducation) => {
            this.dialogRef.close(updatedEducation);
          },
          error: (err: any) => {
            console.error('Error updating education:', err);
          }
        });
      } else {
        // Ajout d'une nouvelle éducation
        this.educationService.addEducation(formData).subscribe({
          next: (newEducation) => {
            this.dialogRef.close(newEducation);
          },
          error: (err: any) => {
            console.error('Error adding education:', err);
          }
        });
      }
    } else {
      console.log('Form is invalid');
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
