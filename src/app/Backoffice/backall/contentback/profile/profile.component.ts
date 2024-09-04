import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../Core/Services/auth.service';
import { CvService } from '../../../../Core/Services/cv.service';
import { CV } from '../../../../Core/models/CV';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

id:any;
user:any;
isOwner: boolean = false;
cv: CV | undefined;
showCVForm = false;
constructor(private act:ActivatedRoute,private auth:AuthService,private cvService: CvService){}

ngOnInit(): void {
  const userId = this.auth.getUserdatafromtoken()._id;
  
  this.auth.getuserbyid(userId).subscribe(user => {
    this.user = user;
    
    this.cvService.getCVByUserId(userId).subscribe(cv => {
      this.cv = cv;
    });
  });
    this.id=this.act.snapshot.paramMap.get('id');
    this.auth.getuserbyid(this.id).subscribe(res=>{
      this.user=res;
      console.log(this.user);
      // Vérifier si l'ID de l'utilisateur connecté correspond à l'ID dans l'URL
      const userData = this.auth.getUserdatafromtoken();
      if (userData && userData._id === this.id) {
        this.isOwner = true;
      }

});
  
}
}