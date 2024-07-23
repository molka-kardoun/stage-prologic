import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


user={
  email: '',
  password:  ''}

  constructor(private authService: AuthService,private router:Router) {}
ngOnInit(): void {

}
token:any;
  login(): void {


    this.authService.login(this.user).subscribe(
      response => {

        this.token= response;
        localStorage.setItem('token', this.token.mytoken);
        this.router.navigate(['/home']);
        console.log('Logged in successfully:', response);

      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }
}

