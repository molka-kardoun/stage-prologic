import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-navback',
  templateUrl: './navback.component.html',
  styleUrls: ['./navback.component.css']
})
export class NavbackComponent implements OnInit {
constructor(public auth:AuthService ){}
ngOnInit(): void {}
}
