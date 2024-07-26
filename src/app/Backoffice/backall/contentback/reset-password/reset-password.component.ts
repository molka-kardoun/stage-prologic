import { Component } from '@angular/core';
import { ForgetpwdService } from 'src/app/Core/Services/forgetpwd.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  email: string = '';
  code: string = '';
  newPassword: string = '';

  constructor(private forgetPasswordService: ForgetpwdService) {}

  resetPassword() {
    this.forgetPasswordService.resetPassword(this.email, this.code, this.newPassword).subscribe(
      response => {
        alert('Password reset successful');
      },
      error => {
        alert('Error: ' + error.error.message);
      }
    );
  }
}
