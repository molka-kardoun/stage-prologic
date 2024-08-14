import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackallComponent } from './Backoffice/backall/backall.component';
import { CardbComponent } from './Backoffice/backall/contentback/cardb/cardb.component';
import { LoginComponent } from './Backoffice/backall/contentback/login/login.component';
import { SignupComponent } from './Backoffice/backall/contentback/signup/signup.component';
import { ProfileComponent } from './Backoffice/backall/contentback/profile/profile.component';
import { CreateLabComponent } from './Backoffice/backall/contentback/create-lab/create-lab.component';
import { ForgetpwdComponent } from './Backoffice/backall/contentback/forgetpwd/forgetpwd.component';
import { EducationFormComponent } from './Backoffice/backall/contentback/education-form/education-form.component';
import { SkillFormComponent } from './Backoffice/backall/contentback/skill-form/skill-form.component';
import { ProjectFormComponent } from './Backoffice/backall/contentback/project-form/project-form.component';
import { CertificationFormComponent  } from './Backoffice/backall/contentback/certification-form/certification-form.component';
import { ExperienceFormComponent } from './Backoffice/backall/contentback/experience-form/experience-form.component';
import {LanguageFormComponent } from './Backoffice/backall/contentback/language-form/language-form.component';
import {CvComponent } from './Backoffice/backall/contentback/cv/cv.component';


const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgetpwd', component: ForgetpwdComponent },
  {
    path: 'home', component: BackallComponent, children: [
      { path: 'cv', component: CvComponent },
      { path: 'card', component: CardbComponent },
      { path: 'addlab', component: CreateLabComponent },
      { path: 'profile/:id', component: ProfileComponent },
      { path: 'edu', component: EducationFormComponent },
      { path: 'skill', component: SkillFormComponent },
      { path: 'projet', component: ProjectFormComponent },
      { path: 'certif', component: CertificationFormComponent },
      { path: 'experience', component: ExperienceFormComponent },
      { path: 'lang', component: LanguageFormComponent }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  { path: '**', redirectTo: '/login' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
