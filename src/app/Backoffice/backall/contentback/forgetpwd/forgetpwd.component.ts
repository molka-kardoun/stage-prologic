import { Component } from '@angular/core';

@Component({
  selector: 'app-forgetpwd',
  templateUrl: './forgetpwd.component.html',
  styleUrls: ['./forgetpwd.component.css']
})
export class ForgetpwdComponent {
  step: number = 1;
  email: string = '';
  code: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor() { }

  nextStep() {
    this.step++;
  }

  verifyCode() {
    // Logique temporaire pour accepter n'importe quel code
    if (this.code) {
      this.nextStep();
    } else {
      alert('Invalid code');
    }
  }

  submit() {
    if (this.newPassword === this.confirmPassword) {
      // Logique pour gérer la réinitialisation du mot de passe
      console.log('New Password:', this.newPassword);
    } else {
      alert('Passwords do not match');
    }
  }
}
