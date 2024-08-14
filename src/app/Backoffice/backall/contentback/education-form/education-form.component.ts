import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Education } from '../../../../Core/models/Education';
import { EducationService } from '../../../../Core/Services/education.service';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent {
  educationForm: FormGroup;

  constructor(private fb: FormBuilder, private educationService: EducationService) {
    this.educationForm = this.fb.group({
      etablissement: ['', Validators.required],
      domaine: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      cv: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.educationForm.valid) {
      this.educationService.addEducation(this.educationForm.value).subscribe(
        response => {
          console.log('Education added successfully', response);
        },
        error => {
          console.error('Error adding education', error);
        }
      );
    }
  }
}
