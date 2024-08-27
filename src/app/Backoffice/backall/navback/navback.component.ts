import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-navback',
  templateUrl: './navback.component.html',
  styleUrls: ['./navback.component.css']
})
export class NavbackComponent implements OnInit {
  id:any;
user:any;
constructor(public auth:AuthService,private act:ActivatedRoute , private router: Router){}
ngOnInit(): void {
  this.id=this.auth.getUserdatafromtoken()._id;
  this.auth.getuserbyid(this.id).subscribe(res=>{
    this.user=res;

});}
logout(){
  this.auth.logout();
}
navigateToProfile() {
  const userId = this.auth.getUserdatafromtoken()._id;
  this.router.navigateByUrl(`/home/profile/${userId}`).then(() => {
    window.location.reload();  // Force the page to reload
  });
}


}
