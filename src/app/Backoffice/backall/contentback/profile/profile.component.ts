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
isOwner: boolean = false;
constructor(private act:ActivatedRoute,private auth:AuthService){}

ngOnInit(): void {
  // Récupérer l'ID de l'utilisateur à partir de l'URL
    this.id=this.act.snapshot.paramMap.get('id');
  // Récupérer les données utilisateur à partir du backend
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
