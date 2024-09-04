import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SkillService } from '../../../../Core/Services/skill.service';
import { AuthService } from '../../../../Core/Services/auth.service';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {
  skillForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private skillService: SkillService,
    private authService: AuthService,
    public dialogRef: MatDialogRef<SkillFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.skillForm = this.fb.group({
      name: ['', Validators.required],
      level: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    });

    if (this.data.skill) {
      this.skillForm.patchValue(this.data.skill);
    }
  }

  onSubmit(): void {
    if (this.skillForm.valid) {
      const formData = {
        name: this.skillForm.value.name,
        level: this.skillForm.value.level as number,
        userId: this.authService.getUserdatafromtoken()._id // Get the user ID
      };

      if (this.data.skill) {
        this.skillService.updateSkill(this.data.skill._id, formData).subscribe({
          next: (updatedSkill) => {
            this.dialogRef.close(updatedSkill); // Close the dialog and return the updated skill
          },
          error: (err) => {
            console.error('Error updating skill:', err);
          }
        });
      } else {
        this.skillService.addSkill(formData).subscribe({
          next: (newSkill) => {
            this.dialogRef.close(newSkill); // Close the dialog and return the new skill
          },
          error: (err) => {
            console.error('Error adding skill:', err);
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
