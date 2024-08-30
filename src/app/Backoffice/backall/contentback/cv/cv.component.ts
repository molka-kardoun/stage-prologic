import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../../../Core/Services/experience.service';
import { AuthService } from '../../../../Core/Services/auth.service';
import { Experience } from '../../../../Core/models/Experience';
import { ProjetService } from '../../../../Core/Services/project.service'; // Import the project service
import { projet } from '../../../../Core/models/Projet'; // Import the project model
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { ExperienceFormComponent } from '../experience-form/experience-form.component'; // Import the form component
import { ProjectFormComponent } from '../project-form/project-form.component'; // Import the project form component


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  userId!: string;
  experiences: Experience[] = [];
  projects: projet[] = []; // Add a projects array
  selectedExperience?: Experience; // Track the selected experience for editing
  selectedProject?: projet; // Track the selected project for editing

  constructor(
    private experienceService: ExperienceService,
    private projetService: ProjetService, // Inject the project service
    private authService: AuthService,
    public dialog: MatDialog // Inject MatDialog
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserdatafromtoken()._id;
    this.loadExperiences();
    this.loadProjects(); // Load projects on initialization
  }

  loadExperiences(): void {
    this.experienceService.getExperiencesByUserId(this.userId).subscribe({
      next: (data: Experience[]) => {
        this.experiences = data;
      },
      error: (err: any) => { // Specify the type of err as any
        console.error('Error fetching experiences:', err);
      }
    });
  }

  loadProjects(): void {
    this.projetService.getProjectsByUserId(this.userId).subscribe({
      next: (data: projet[]) => {
        this.projects = data;
      },
      error: (err: any) => {
        console.error('Error fetching projects:', err);
      }
    });
  }

  deleteExperience(id: string): void {
    if (confirm('Are you sure you want to delete this experience?')) {
      this.experienceService.deleteExperience(id).subscribe({
        next: () => {
          this.loadExperiences(); // Refresh the list after deletion
        },
        error: (err: any) => { // Specify the type of err as any
          console.error('Error deleting experience:', err);
        }
      });
    }
  }

  deleteProject(id: string): void {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projetService.deleteProject(id).subscribe({
        next: () => {
          this.loadProjects();
        },
        error: (err: any) => {
          console.error('Error deleting project:', err);
        }
      });
    }
  }

  editExperience(experience: Experience): void {
    this.selectedExperience = experience; // Set the selected experience
    this.openExperienceDialog(experience); // Open dialog for editing
  }
  editProject(project: projet): void {
    this.selectedProject = project;
    this.openProjectDialog(project);
  }

  openExperienceDialog(experience?: Experience): void {
    const dialogRef = this.dialog.open(ExperienceFormComponent, {
      width: '600px',
      data: { experience } // Pass the experience data if available
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadExperiences(); // Reload experiences after the dialog is closed
      }
    });
  }

  openProjectDialog(project?: projet): void {
    const dialogRef = this.dialog.open(ProjectFormComponent, {
      width: '600px',
      data: { project }
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadProjects(); // Recharge les projets après la fermeture de la boîte de dialogue
      }
    });
  }

  
  onProjectUpdated(updatedProject: projet): void {
    const index = this.projects.findIndex(proj => proj. _id === updatedProject._id);
    if (index !== -1) {
      this.projects[index] = updatedProject;
    } else {
      this.projects.push(updatedProject); // Add new project if it was created
    }
    this.selectedProject = undefined; // Clear the selected project after updating
  }
  onExperienceUpdated(updatedExperience: Experience): void {
    // Replace the updated experience in the list
    const index = this.experiences.findIndex(exp => exp._id === updatedExperience._id);
    if (index !== -1) {
      this.experiences[index] = updatedExperience;
    }
    this.selectedExperience = undefined; // Clear the selected experience after updating
  }

}