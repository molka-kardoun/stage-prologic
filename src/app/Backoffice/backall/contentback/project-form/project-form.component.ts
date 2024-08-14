// src/app/project-form/project-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjetService } from '../../../../Core/Services/project.service';
import { projet } from '../../../../Core/models/Projet';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projetService: ProjetService
  ) {
    this.projectForm = this.fb.group({
      organisation: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      cv: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.projectForm.valid) {
      const newProject: projet = this.projectForm.value;
      this.projetService.createProject(newProject).subscribe(
        (response) => {
          console.log('Project created successfully', response);
          // Ajouter toute autre logique de succès, comme la redirection.
        },
        (error) => {
          console.error('Error creating project', error);
          // Gérer les erreurs ici.
        }
      );
    }
  }
}