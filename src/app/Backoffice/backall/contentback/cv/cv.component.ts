import { Component, Inject, OnInit } from '@angular/core';
import { ExperienceService } from '../../../../Core/Services/experience.service';
import { CertificationService } from '../../../../Core/Services/certification.service';
import { AuthService } from '../../../../Core/Services/auth.service';
import { Experience } from '../../../../Core/models/Experience';
import { Certification } from '../../../../Core/models/Certification';
import { ProjetService } from '../../../../Core/Services/project.service';
import { projet } from '../../../../Core/models/Projet';
import { EducationService } from '../../../../Core/Services/education.service';
import { Education } from '../../../../Core/models/Education';
import { LanguageService } from '../../../../Core/Services/language.service'; // Importer le service Language
import { Language } from '../../../../Core/models/Language'; // Importer le modèle Language
import { SkillService } from '../../../../Core/Services/skill.service'; // Importer le service Skill
import { Skill } from '../../../../Core/models/Skill'; // Importer le modèle Skill
import { MatDialog } from '@angular/material/dialog';
import { ExperienceFormComponent } from '../experience-form/experience-form.component';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { CertificationFormComponent } from '../certification-form/certification-form.component';
import { EducationFormComponent } from '../education-form/education-form.component';
import { LanguageFormComponent } from '../language-form/language-form.component';
import { SkillFormComponent } from '../skill-form/skill-form.component';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  userId!: string;
  experiences: Experience[] = [];
  projects: projet[] = [];
  certifications: Certification[] = [];
  educations: Education[] = [];
  languages: Language[] = []; // Ajouter un tableau pour les langues
  skills: Skill[] = []; // Ajouter un tableau pour les compétences
  selectedExperience?: Experience;
  selectedProject?: projet;
  selectedCertification?: Certification;
  selectedEducation?: Education;
  selectedLanguage?: Language;
  selectedSkill?: Skill;

  constructor(
    private experienceService: ExperienceService,
    private projetService: ProjetService,
    @Inject(EducationService) private educationService: EducationService,
    @Inject(CertificationService) private certificationService: CertificationService,
    private languageService: LanguageService, // Injecter LanguageService
    private skillService: SkillService, // Injecter SkillService
    private authService: AuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserdatafromtoken()._id;
    this.loadExperiences();
    this.loadProjects();
    this.loadCertifications();
    this.loadEducations();
    this.loadLanguages();
    this.loadSkills();
  }

  loadExperiences(): void {
    this.experienceService.getExperiencesByUserId(this.userId).subscribe({
      next: (data: Experience[]) => {
        this.experiences = data;
      },
      error: (err: any) => {
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

  loadCertifications(): void {
    this.certificationService.getCertificationsByUserId(this.userId).subscribe({
      next: (data: Certification[]) => {
        this.certifications = data;
      },
      error: (err: any) => {
        console.error('Error fetching certifications:', err);
      }
    });
  }

  loadEducations(): void {
    this.educationService.getEducationsByUserId(this.userId).subscribe({
      next: (data: Education[]) => {
        this.educations = data;
      },
      error: (err: any) => {
        console.error('Error fetching educations:', err);
      }
    });
  }
  loadLanguages(): void {
    this.languageService.getLanguages(this.userId).subscribe({
      next: (data: Language[]) => {
        this.languages = data;
      },
      error: (err: any) => {
        console.error('Error fetching languages:', err);
      }
    });
  }

  loadSkills(): void {
    this.skillService.getSkills(this.userId).subscribe({
      next: (data: Skill[]) => {
        this.skills = data;
      },
      error: (err: any) => {
        console.error('Error fetching skills:', err);
      }
    });
  }

  deleteExperience(id: string): void {
    if (confirm('Are you sure you want to delete this experience?')) {
      this.experienceService.deleteExperience(id).subscribe({
        next: () => {
          this.loadExperiences();
        },
        error: (err: any) => {
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

  deleteCertification(id: string): void {
    if (confirm('Are you sure you want to delete this certification?')) {
      this.certificationService.deleteCertification(id).subscribe({
        next: () => {
          this.loadCertifications();
        },
        error: (err: any) => {
          console.error('Error deleting certification:', err);
        }
      });
    }
  }

  deleteEducation(id: string): void {
    if (confirm('Are you sure you want to delete this education?')) {
      this.educationService.deleteEducation(id).subscribe({
        next: () => {
          this.loadEducations();
        },
        error: (err: any) => {
          console.error('Error deleting education:', err);
        }
      });
    }
  }
  deleteLanguage(id: string): void {
    if (confirm('Are you sure you want to delete this language?')) {
      this.languageService.deleteLanguage(id).subscribe({
        next: () => {
          this.loadLanguages();
        },
        error: (err: any) => {
          console.error('Error deleting language:', err);
        }
      });
    }
  }

  deleteSkill(id: string): void {
    if (confirm('Are you sure you want to delete this skill?')) {
      this.skillService.deleteSkill(id).subscribe({
        next: () => {
          this.loadSkills();
        },
        error: (err: any) => {
          console.error('Error deleting skill:', err);
        }
      });
    }
  }

  editExperience(experience: Experience): void {
    this.selectedExperience = experience;
    this.openExperienceDialog(experience);
  }

  editProject(project: projet): void {
    this.selectedProject = project;
    this.openProjectDialog(project);
  }

  editCertification(certification: Certification): void {
    this.selectedCertification = certification;
    this.openCertificationDialog(certification);
  }

  editEducation(education: Education): void {
    this.selectedEducation = education;
    this.openEducationDialog(education);
  }
  editLanguage(language: Language): void {
    this.selectedLanguage = language;
    this.openLanguageDialog(language);
  }
  editSkill(skill: Skill): void {
    this.selectedSkill = skill;
    this.openSkillDialog(skill);
  }

  openLanguageDialog(language?: Language): void {
    const dialogRef = this.dialog.open(LanguageFormComponent, {
      width: '600px',
      data: { language }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onLanguageUpdated(result);
      }
    });
  }
  openExperienceDialog(experience?: Experience): void {
    const dialogRef = this.dialog.open(ExperienceFormComponent, {
      width: '600px',
      data: { experience }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onExperienceUpdated(result); // Appel de la méthode pour mettre à jour l'expérience
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
        this.onProjectUpdated(result); // Appel de la méthode pour mettre à jour le projet
      }
    });
  }

  openCertificationDialog(certification?: Certification): void {
    const dialogRef = this.dialog.open(CertificationFormComponent, {
      width: '600px',
      data: { certification }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onCertificationUpdated(result); // Appel de la méthode pour mettre à jour la certification
      }
    });
  }

  openEducationDialog(education?: Education): void {
    const dialogRef = this.dialog.open(EducationFormComponent, {
      width: '600px',
      data: { education }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onEducationUpdated(result); // Appel de la méthode pour mettre à jour l'éducation
      }
    });
  }

  openSkillDialog(skill?: Skill): void {
    const dialogRef = this.dialog.open(SkillFormComponent, {
      width: '600px',
      data: { skill }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.onSkillUpdated(result);
      }
    });
  }
  onProjectUpdated(updatedProject: projet): void {
    const index = this.projects.findIndex(proj => proj._id === updatedProject._id);
    if (index !== -1) {
      this.projects[index] = updatedProject;
    } else {
      this.projects.push(updatedProject);
    }
    this.selectedProject = undefined;
  }

  onExperienceUpdated(updatedExperience: Experience): void {
    const index = this.experiences.findIndex(exp => exp._id === updatedExperience._id);
    if (index !== -1) {
      this.experiences[index] = updatedExperience;
    }
    this.selectedExperience = undefined;
  }

  onCertificationUpdated(updatedCertification: Certification): void {
    const index = this.certifications.findIndex(cert => cert._id === updatedCertification._id);
    if (index !== -1) {
      this.certifications[index] = updatedCertification;
    } else {
      this.certifications.push(updatedCertification);
    }
    this.selectedCertification = undefined;
  }

  onEducationUpdated(updatedEducation: Education): void {
    const index = this.educations.findIndex(edu => edu._id === updatedEducation._id);
    if (index !== -1) {
      this.educations[index] = updatedEducation;
    } else {
      this.educations.push(updatedEducation);
    }
    this.selectedEducation = undefined;
  }
  onLanguageUpdated(updatedLanguage: Language): void {
    const index = this.languages.findIndex(lang => lang._id === updatedLanguage._id);
    if (index !== -1) {
      this.languages[index] = updatedLanguage;
    } else {
      this.languages.push(updatedLanguage);
    }
    this.selectedLanguage = undefined;
  }
  onSkillUpdated(updatedSkill: Skill): void {
    const index = this.skills.findIndex(skill => skill._id === updatedSkill._id);
    if (index !== -1) {
      this.skills[index] = updatedSkill;
    } else {
      this.skills.push(updatedSkill);
    }
    this.selectedSkill = undefined;
  }

}