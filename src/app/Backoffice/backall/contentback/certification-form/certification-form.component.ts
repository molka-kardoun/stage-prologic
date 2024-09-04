import { Component, OnInit, Input, Output, EventEmitter, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CertificationService } from '../../../../Core/Services/certification.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Certification } from '../../../../Core/models/Certification';
import { AuthService } from '../../../../Core/Services/auth.service';

@Component({
  selector: 'app-certification-form',
  templateUrl: './certification-form.component.html',
  styleUrls: ['./certification-form.component.css']
})
export class CertificationFormComponent implements OnInit {
  @Input() certification?: Certification; // Certification to edit
  @Output() certificationUpdated = new EventEmitter<Certification>();

  certificationForm!: FormGroup;
  userId!: string;

  constructor(
    private fb: FormBuilder,
    private certificationService: CertificationService,
    private authService: AuthService,
    @Optional() public dialogRef: MatDialogRef<CertificationFormComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { certification?: Certification }
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserdatafromtoken()._id;
    this.initializeForm();

    // Si une certification est passée en paramètre, pré-remplir le formulaire
    if (this.data.certification) {
      this.certificationForm.patchValue(this.data.certification);
    }
  }

  initializeForm(): void {
    this.certificationForm = this.fb.group({
      domain: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.certificationForm.valid) {
      const formData: Certification = {
        ...this.certificationForm.value,
        date: new Date(this.certificationForm.value.date),
        userId: this.userId
      };

      if (this.data.certification) {
        // Mise à jour d'une certification existante
        this.certificationService.updateCertification(this.data.certification._id!, formData).subscribe({
          next: (updatedCertification) => {
            this.dialogRef.close(updatedCertification);
          },
          error: (err: any) => {
            console.error('Error updating certification:', err);
          }
        });
      } else {
        // Ajout d'une nouvelle certification
        this.certificationService.addCertification(formData).subscribe({
          next: (newCertification) => {
            this.dialogRef.close(newCertification);
          },
          error: (err: any) => {
            console.error('Error adding certification:', err);
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
