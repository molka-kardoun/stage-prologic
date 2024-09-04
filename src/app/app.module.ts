import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BackallComponent } from './Backoffice/backall/backall.component';
import { ContentbackComponent } from './Backoffice/backall/contentback/contentback.component';
import { FooterbackComponent } from './Backoffice/backall/footerback/footerback.component';
import { NavbackComponent } from './Backoffice/backall/navback/navback.component';
import { SidebarbackComponent } from './Backoffice/backall/sidebarback/sidebarback.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AcceptedinternsComponent } from './Backoffice/backall/contentback/acceptedinterns/acceptedinterns.component';
import { AssignEncadrantComponent } from './Backoffice/backall/contentback/assign-encadrant/assign-encadrant.component';
import { AssignQuizToOfferComponent } from './Backoffice/backall/contentback/assign-quiz-to-offer/assign-quiz-to-offer.component';
import { CardbComponent } from './Backoffice/backall/contentback/cardb/cardb.component';
import { CreateLabComponent } from './Backoffice/backall/contentback/create-lab/create-lab.component';
import { CreateQuizComponent } from './Backoffice/backall/contentback/create-quiz/create-quiz.component';
import { DetailedInternshipOffersComponent } from './Backoffice/backall/contentback/detailed-internship-offers/detailed-internship-offers.component';
import { EncadrantDashboardComponent } from './Backoffice/backall/contentback/encadrant-dashboard/encadrant-dashboard.component';
import { InternshipOfferComponent } from './Backoffice/backall/contentback/internship-offer/internship-offer.component';
import { ListInternshipOffersComponent } from './Backoffice/backall/contentback/list-internship-offers/list-internship-offers.component';
import { ListcandidatesComponent } from './Backoffice/backall/contentback/listcandidates/listcandidates.component';
import { LoginComponent } from './Backoffice/backall/contentback/login/login.component';
import { MyTasksComponent } from './Backoffice/backall/contentback/my-tasks/my-tasks.component';
import { OfferwithencadrantandusersComponent } from './Backoffice/backall/contentback/offerwithencadrantandusers/offerwithencadrantandusers.component';
import { ProfileComponent } from './Backoffice/backall/contentback/profile/profile.component';
import { RegistersucessmsgComponent } from './Backoffice/backall/contentback/registersucessmsg/registersucessmsg.component';
import { RequestResetPasswordComponent } from './Backoffice/backall/contentback/request-reset-password/request-reset-password.component';
import { ResetPasswordComponent } from './Backoffice/backall/contentback/reset-password/reset-password.component';
import { SignupComponent } from './Backoffice/backall/contentback/signup/signup.component';
import { SubmitQuizComponent } from './Backoffice/backall/contentback/submit-quiz/submit-quiz.component';
import { TaskManagementComponent } from './Backoffice/backall/contentback/task-management/task-management.component';
import { UpdateProfileComponent } from './Backoffice/backall/contentback/update-profile/update-profile.component';
import { ProgressModalComponent } from './Backoffice/backall/contentback/progress-modal/progress-modal.component';
import { UploadReportComponent } from './Backoffice/backall/contentback/upload-report/upload-report.component';
import { ValidateInternComponent } from './Backoffice/backall/contentback/validate-intern/validate-intern.component';
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
    RequestResetPasswordComponent,
    ResetPasswordComponent,
    RegistersucessmsgComponent,
    CreateQuizComponent,
    SubmitQuizComponent,
    InternshipOfferComponent,
    AssignQuizToOfferComponent,
    ListInternshipOffersComponent,
    UpdateProfileComponent,
    DetailedInternshipOffersComponent,
    AcceptedinternsComponent,
    AssignEncadrantComponent,
    OfferwithencadrantandusersComponent,
    EncadrantDashboardComponent,
    ListcandidatesComponent,
    TaskManagementComponent,
    MyTasksComponent,
    ProgressModalComponent,
    UploadReportComponent,
    ValidateInternComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
