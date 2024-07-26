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
const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: '', component: LoginComponent},
  {path: 'forgotpwd', component: RequestResetPasswordComponent},
  {path: 'newpwd', component: ResetPasswordComponent},

    {path: "home", component: BackallComponent , children: [
      {path: 'card', component: CardbComponent},
      {path: 'addlab',canActivate:[AuthGuard] ,component: CreateLabComponent},
      {path: 'profile/:id', component: ProfileComponent}

      ]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
