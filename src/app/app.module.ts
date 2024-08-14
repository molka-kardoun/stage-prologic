import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BackallComponent } from './Backoffice/backall/backall.component';
import { NavbackComponent } from './Backoffice/backall/navback/navback.component';
import { ContentbackComponent } from './Backoffice/backall/contentback/contentback.component';
import { FooterbackComponent } from './Backoffice/backall/footerback/footerback.component';
import { SidebarbackComponent } from './Backoffice/backall/sidebarback/sidebarback.component';

import { CardbComponent } from './Backoffice/backall/contentback/cardb/cardb.component';
import { LoginComponent } from './Backoffice/backall/contentback/login/login.component';
import { SignupComponent } from './Backoffice/backall/contentback/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './Backoffice/backall/contentback/profile/profile.component';
import { CreateLabComponent } from './Backoffice/backall/contentback/create-lab/create-lab.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ForgetpwdComponent } from './Backoffice/backall/contentback/forgetpwd/forgetpwd.component';
import { CertificationFormComponent } from './Backoffice/backall/contentback/certification-form/certification-form.component';
import { EducationFormComponent } from './Backoffice/backall/contentback/education-form/education-form.component';
import { SkillFormComponent } from './Backoffice/backall/contentback/skill-form/skill-form.component';
import { ProjectFormComponent } from './Backoffice/backall/contentback/project-form/project-form.component';
import { ExperienceFormComponent } from './Backoffice/backall/contentback/experience-form/experience-form.component';
import { LanguageFormComponent } from './Backoffice/backall/contentback/language-form/language-form.component';
import { CvComponent } from './Backoffice/backall/contentback/cv/cv.component';




@NgModule({
  declarations: [
    AppComponent,
    BackallComponent,
    NavbackComponent,
    ContentbackComponent,
    FooterbackComponent,
    SidebarbackComponent,

    CardbComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    CreateLabComponent,
    ForgetpwdComponent,
    CertificationFormComponent,
    EducationFormComponent,
    SkillFormComponent,
    ProjectFormComponent,
    ExperienceFormComponent,
    LanguageFormComponent,
    CvComponent
   
    

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
