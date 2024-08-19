import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-sidebarback',
  templateUrl: './sidebarback.component.html',
  styleUrls: ['./sidebarback.component.css']
})
export class SidebarbackComponent  {
  id:any;
  user:any;
  constructor(public auth:AuthService,private act:ActivatedRoute ){}
  ngOnInit(): void {
    this.id=this.auth.getUserdatafromtoken()._id;
    this.auth.getuserbyid(this.id).subscribe(res=>{
      this.user=res;

  });}
}
