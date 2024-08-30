import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../../../../Core/Services/language.service';
import { Language } from '../../../../Core/models/Language'; // Adjust import path if necessary

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.css']
})
export class LanguageFormComponent implements OnInit {
  @Input() editingItem: Language | null = null;
  @Output() formSubmit = new EventEmitter<Language>();
  @Output() cancel = new EventEmitter<void>();

  languageForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.languageForm = this.fb.group({
      name: [this.editingItem?.name || '', Validators.required],
      level: [this.editingItem?.level || '', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.languageForm.valid) {
      const languageData: Language = {
        ...this.languageForm.value,
        _id: this.editingItem ? this.editingItem._id : undefined  // Keep ID if editing
      };

      this.formSubmit.emit(languageData);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
