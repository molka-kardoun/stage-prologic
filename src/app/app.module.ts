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
import { RequestResetPasswordComponent } from './Backoffice/backall/contentback/request-reset-password/request-reset-password.component';
import { ResetPasswordComponent } from './Backoffice/backall/contentback/reset-password/reset-password.component';
import { RegistersucessmsgComponent } from './Backoffice/backall/contentback/registersucessmsg/registersucessmsg.component';
import { CreateQuizComponent } from './Backoffice/backall/contentback/create-quiz/create-quiz.component';
import { SubmitQuizComponent } from './Backoffice/backall/contentback/submit-quiz/submit-quiz.component';
import { InternshipOfferComponent } from './Backoffice/backall/contentback/internship-offer/internship-offer.component';
import { AssignQuizToOfferComponent } from './Backoffice/backall/contentback/assign-quiz-to-offer/assign-quiz-to-offer.component';
import { ListInternshipOffersComponent } from './Backoffice/backall/contentback/list-internship-offers/list-internship-offers.component';
import { UpdateProfileComponent } from './Backoffice/backall/contentback/update-profile/update-profile.component';
import { DetailedInternshipOffersComponent } from './Backoffice/backall/contentback/detailed-internship-offers/detailed-internship-offers.component';

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
    DetailedInternshipOffersComponent

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
