import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../../../../Core/Services/language.service';
import { Router } from '@angular/router';
import { Language } from '../../../../Core/models/Language';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.languageForm = this.fb.group({
      name: ['', Validators.required],
      level: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      certification: ['', Validators.required],
      cv: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.languageForm.valid) {
      const newLanguage: Language = this.languageForm.value;
      this.languageService.addLanguage(newLanguage).subscribe({
        next: (response) => {
          console.log('Language added successfully', response);
          this.router.navigate(['/languages']);  // Rediriger vers la liste des langues
        },
        error: (err) => {
          console.error('Error adding language', err);
        }
      });
    }
  }
}
