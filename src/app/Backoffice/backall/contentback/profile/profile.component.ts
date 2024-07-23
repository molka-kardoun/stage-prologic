import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

id:any;
user:any;
constructor(private act:ActivatedRoute,private auth:AuthService){}

ngOnInit(): void {
    this.id=this.act.snapshot.paramMap.get('id');
    this.auth.getuserbyid(this.id).subscribe(res=>{
      this.user=res;
      console.log(this.user);
});

}}
