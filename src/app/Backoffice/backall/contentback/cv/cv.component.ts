import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../../../Core/Services/experience.service';
import { LanguageService } from '../../../../Core/Services/language.service';
import { CertificationService } from '../../../../Core/Services/certification.service';
import { ProjetService } from '../../../../Core/Services/project.service';
import { SkillService } from '../../../../Core/Services/skill.service';
import { EducationService } from '../../../../Core/Services/education.service';
import { Experience } from '../../../../Core/models/Experience';
import { Language } from '../../../../Core/models/Language';
import { Certification } from '../../../../Core/models/Certification';
import { projet as Project } from '../../../../Core/models/Projet';
import { Skill } from '../../../../Core/models/Skill';
import { Education } from '../../../../Core/models/Education';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  experiences: Experience[] = [];
  languages: Language[] = [];
  certifications: Certification[] = [];
  projects: Project[] = [];
  skills: Skill[] = [];
  education: Education[] = [];

  showAddExperience = false;
  showAddLanguage = false;
  showAddCertification = false;
  showAddProject = false;
  showAddSkill = false;
  showAddEducation = false;

  constructor(
    private experienceService: ExperienceService,
    private languageService: LanguageService,
    private certificationService: CertificationService,
    private projectService: ProjetService,
    private skillService: SkillService,
    private educationService: EducationService
  ) {}

  ngOnInit(): void {
    this.loadData();
    
  }

  loadData(): void {
    this.experienceService.getExperiences().subscribe(data => this.experiences = data);
    this.languageService.getLanguages().subscribe(data => this.languages = data);
    this.certificationService.getCertifications().subscribe(data => this.certifications = data);
    this.projectService.getAllProjects().subscribe(data => this.projects = data);
    this.skillService.getSkills().subscribe(data => this.skills = data);
    this.educationService.getAllEducations().subscribe(data => this.education = data);
  }

  toggleAddExperience(): void {
    this.showAddExperience = !this.showAddExperience;
  }

  toggleAddLanguage(): void {
    this.showAddLanguage = !this.showAddLanguage;
  }

  toggleAddCertification(): void {
    this.showAddCertification = !this.showAddCertification;
  }

  toggleAddProject(): void {
    this.showAddProject = !this.showAddProject;
  }

  toggleAddSkill(): void {
    this.showAddSkill = !this.showAddSkill;
  }

  toggleAddEducation(): void {
    this.showAddEducation = !this.showAddEducation;
  }

  editExperience(experience: Experience): void {
    // Logic for editing an experience
  }

  deleteExperience(experience: Experience): void {
    if (experience._id) {
      this.experienceService.deleteExperience(experience._id).subscribe(() => {
        this.loadData();
      });
    } else {
      console.error('Experience ID is undefined');
    }
  }

  editLanguage(language: Language): void {
    // Logic for editing a language
  }

  deleteLanguage(language: Language): void {
    if (language._id) {
      this.languageService.deleteLanguage(language._id).subscribe(() => {
        this.loadData();
      });
    } else {
      console.error('Language ID is undefined');
    }
  }

  editCertification(certification: Certification): void {
    // Logic for editing a certification
  }

  deleteCertification(certification: Certification): void {
    if (certification._id) {
      this.certificationService.deleteCertification(certification._id).subscribe(() => {
        this.loadData();
      });
    } else {
      console.error('Certification ID is undefined');
    }
  }

  editProject(project: Project): void {
    // Logic for editing a project
  }

  deleteProject(project: Project): void {
    if ((project as any)._id) {
      this.projectService.deleteProject((project as any)._id).subscribe(() => {
        this.loadData();
      });
    } else {
      console.error('Project ID is undefined');
    }
  }

  editSkill(skill: Skill): void {
    // Logic for editing a skill
  }

  deleteSkill(skill: Skill): void {
    if (skill._id) {
      this.skillService.deleteSkill(skill._id).subscribe(() => {
        this.loadData();
      });
    } else {
      console.error('Skill ID is undefined');
    }
  }

  editEducation(education: Education): void {
    // Logic for editing an education
  }

  deleteEducation(education: Education): void {
    if (education._id) {
      this.educationService.deleteEducation(education._id).subscribe(() => {
        this.loadData();
      });
    } else {
      console.error('Education ID is undefined');
    }
  }
}
