import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-navback',
  templateUrl: './navback.component.html',
  styleUrls: ['./navback.component.css']
})
export class NavbackComponent implements OnInit {
  id:any;
user:any;
constructor(public auth:AuthService,private act:ActivatedRoute ){}
ngOnInit(): void {
  this.id=this.auth.getUserdatafromtoken()._id;
  this.auth.getuserbyid(this.id).subscribe(res=>{
    this.user=res;

});}
logout(){
  this.auth.logout();
}


}
