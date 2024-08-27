import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackallComponent } from './Backoffice/backall/backall.component';

import { CardbComponent } from './Backoffice/backall/contentback/cardb/cardb.component';
import { CreateLabComponent } from './Backoffice/backall/contentback/create-lab/create-lab.component';
import { LoginComponent } from './Backoffice/backall/contentback/login/login.component';
import { ProfileComponent } from './Backoffice/backall/contentback/profile/profile.component';
import { SignupComponent } from './Backoffice/backall/contentback/signup/signup.component';
import { AuthGuard } from './Core/Guards/auth.guard';
import { RequestResetPasswordComponent } from './Backoffice/backall/contentback/request-reset-password/request-reset-password.component';
import { ResetPasswordComponent } from './Backoffice/backall/contentback/reset-password/reset-password.component';
import { RoleGuard } from './Core/Guards/role.guard';
import { Roles } from './Core/models/Roles';
import { RegistersucessmsgComponent } from './Backoffice/backall/contentback/registersucessmsg/registersucessmsg.component';
import { CreateQuizComponent } from './Backoffice/backall/contentback/create-quiz/create-quiz.component';
import { SubmitQuizComponent } from './Backoffice/backall/contentback/submit-quiz/submit-quiz.component';
import { InternshipOfferComponent } from './Backoffice/backall/contentback/internship-offer/internship-offer.component';
import { AssignQuizToOfferComponent } from './Backoffice/backall/contentback/assign-quiz-to-offer/assign-quiz-to-offer.component';
import { ListInternshipOffersComponent } from './Backoffice/backall/contentback/list-internship-offers/list-internship-offers.component';
import { UpdateProfileComponent } from './Backoffice/backall/contentback/update-profile/update-profile.component';
import { DetailedInternshipOffersComponent } from './Backoffice/backall/contentback/detailed-internship-offers/detailed-internship-offers.component';
import { AcceptedinternsComponent } from './Backoffice/backall/contentback/acceptedinterns/acceptedinterns.component';
import { AssignEncadrantComponent } from './Backoffice/backall/contentback/assign-encadrant/assign-encadrant.component';
import { OfferwithencadrantandusersComponent } from './Backoffice/backall/contentback/offerwithencadrantandusers/offerwithencadrantandusers.component';
import { EncadrantDashboardComponent } from './Backoffice/backall/contentback/encadrant-dashboard/encadrant-dashboard.component';
import { ListcandidatesComponent } from './Backoffice/backall/contentback/listcandidates/listcandidates.component';
const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: '', component: LoginComponent},
  {path: 'forgotpwd', component: RequestResetPasswordComponent},
  {path: 'newpwd', component: ResetPasswordComponent},
  {path: 'success', component: RegistersucessmsgComponent},


    {path: "home", component: BackallComponent , children: [
      {path: 'card', component: CardbComponent},

      {path: 'addlab',canActivate:[AuthGuard,RoleGuard] ,data: { expectedRoles: [Roles.ADMIN] },component: CreateLabComponent},
      {path: 'profile/:id', component: ProfileComponent},
      {path: 'createquiz',component: CreateQuizComponent},

      { path: 'create-offer', component: InternshipOfferComponent },
      { path: 'assign-quiz-offer', component: AssignQuizToOfferComponent },
      { path: 'apply-internship/:id', component: SubmitQuizComponent },
      { path: 'internship-offers', component: ListInternshipOffersComponent },
      {  path: 'update-profile/:id',  component: UpdateProfileComponent },
      {  path: 'offerdetails',  component:  DetailedInternshipOffersComponent },
      {  path: 'acceptedinterns',  component:  AcceptedinternsComponent },
      {  path: 'AssignEncadrant',  component:  AssignEncadrantComponent },
      {  path: 'offerwithecadrant&users',  component:  OfferwithencadrantandusersComponent },
      {path: 'myinterns',canActivate:[AuthGuard,RoleGuard] ,data: { expectedRoles: [Roles.ENCADRANT] },component:EncadrantDashboardComponent},
      {path: 'list-candidates',canActivate:[AuthGuard,RoleGuard] ,data: { expectedRoles: [Roles.ASSISTANT] },component:ListcandidatesComponent},



      ]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
