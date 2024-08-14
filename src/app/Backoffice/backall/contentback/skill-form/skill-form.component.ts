import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SkillService } from '../../../../Core/Services/skill.service';
import { Router } from '@angular/router';
import { Skill } from '../../../../Core/models/Skill';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {
  skillForm!: FormGroup;  // Utilisez l'opérateur '!' pour indiquer que la variable sera initialisée avant d'être utilisée

  constructor(
    private fb: FormBuilder,
    private skillService: SkillService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.skillForm = this.fb.group({
      name: ['', Validators.required],
      level: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      cv: ['', Validators.required]  // Assurez-vous que l'ID du CV est fourni
    });
  }

  onSubmit(): void {
    if (this.skillForm.valid) {
      const newSkill: Skill = this.skillForm.value;
      this.skillService.addSkill(newSkill).subscribe({
        next: (response) => {
          console.log('Skill added successfully', response);
          this.router.navigate(['/skills']);  // Rediriger vers la liste des compétences
        },
        error: (err) => {
          console.error('Error adding skill', err);
        }
      });
    }
  }
}