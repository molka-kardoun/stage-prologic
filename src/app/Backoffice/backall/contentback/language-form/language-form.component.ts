import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LanguageService } from '../../../../Core/Services/language.service';
import { AuthService } from '../../../../Core/Services/auth.service';

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.css']
})
export class LanguageFormComponent implements OnInit {
  languageForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private languageService: LanguageService,
    private authService: AuthService,
    public dialogRef: MatDialogRef<LanguageFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    // Initialize the form with validators
    this.languageForm = this.fb.group({
      name: ['', Validators.required],
      level: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      certification: ['']
    });

    // If the data contains a language, pre-fill the form with the language data
    if (this.data.language) {
      this.languageForm.patchValue(this.data.language);
    }
  }

  onSubmit(): void {
    if (this.languageForm.valid) {
      const formData = {
        name: this.languageForm.value.name,
        level: this.languageForm.value.level as number,  // Ensure this is a number
        certification: this.languageForm.value.certification,
        userId: this.authService.getUserdatafromtoken()._id  // Get the user's ID
      };

      if (this.data.language) {
        // Update scenario
        this.languageService.updateLanguage(this.data.language._id, formData).subscribe({
          next: (updatedLanguage) => {
            this.dialogRef.close(updatedLanguage);  // Close the dialog and return the updated language
          },
          error: (err) => {
            console.error('Error updating language:', err);
          }
        });
      } else {
        // Add scenario
        this.languageService.addLanguage(formData).subscribe({
          next: (newLanguage) => {
            this.dialogRef.close(newLanguage);  // Close the dialog and return the new language
          },
          error: (err) => {
            console.error('Error adding language:', err);
          }
        });
      }
    } else {
      console.log('Form is invalid');
    }
  }

  onCancel(): void {
    this.dialogRef.close();  // Close the dialog without any action
  }
}
