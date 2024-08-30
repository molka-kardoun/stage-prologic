import { Component, OnInit, Input, Output, EventEmitter, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjetService } from '../../../../Core/Services/project.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../Core/Services/auth.service';
import { projet } from '../../../../Core/models/Projet';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  @Input() project?: projet; // Receive the project to edit
  @Output() projectUpdated = new EventEmitter<projet>();

  projectForm!: FormGroup;
  userId!: string;

  constructor(
    private fb: FormBuilder,
    private projetService: ProjetService,
    private router: Router,
    private authService: AuthService,
    @Optional() public dialogRef: MatDialogRef<ProjectFormComponent>, // Make MatDialogRef optional
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { project?: projet } // Make MAT_DIALOG_DATA optional
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserdatafromtoken()._id;
    this.initializeForm();

    if (this.data.project) {
      this.projectForm.patchValue(this.data.project); // Populate the form if editing
    }
  }

  initializeForm(): void {
    this.projectForm = this.fb.group({
      organisation: ['', Validators.required],
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.projectForm.valid) {
      const formData: projet = {
        ...this.projectForm.value,
        date: new Date(this.projectForm.value.date), // Convert date to Date object
        userId: this.userId
      };

      if (this.data.project) {
        // Update existing project
        this.projetService.updateProject(this.data.project._id!, formData).subscribe({
          next: (updatedProject) => {
            this.dialogRef.close(updatedProject); // Close the dialog and pass the updated project back
          },
          error: (err: any) => {
            console.error('Error updating project:', err);
          }
        });
      } else {
        // Add new project
        this.projetService.createProject(formData).subscribe({
          next: (newProject) => {
            this.dialogRef.close(newProject); // Close the dialog and pass the new project back
          },
          error: (err: any) => {
            console.error('Error adding project:', err);
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
