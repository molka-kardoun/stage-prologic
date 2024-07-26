import { Component } from '@angular/core';
import { ForgetpwdService } from 'src/app/Core/Services/forgetpwd.service';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.css']
})
export class RequestResetPasswordComponent {
  email: string = '';
  showLink: boolean = false;

  constructor(private forgetPasswordService: ForgetpwdService) {}

  requestResetPassword() {
    this.forgetPasswordService.requestResetPassword(this.email).subscribe(
      response => {
        alert('Reset code sent to email');
        // Afficher le lien après 10 secondes
        setTimeout(() => {
          this.showLink = true;
        }, 5000); // 5 secondes
      },
      error => {
        alert('Error: ' + error.error.message);
      }
    );
  }
}
