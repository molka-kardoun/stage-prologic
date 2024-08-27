import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import PerfectScrollbar from 'perfect-scrollbar';

import { AuthService } from 'src/app/Core/Services/auth.service';

@Component({
  selector: 'app-sidebarback',
  templateUrl: './sidebarback.component.html',
  styleUrls: ['./sidebarback.component.css']
})
export class SidebarbackComponent  implements AfterViewInit {
  id:any;
  user:any;
  constructor(public auth:AuthService,private act:ActivatedRoute ){}
  ngOnInit(): void {
    this.id=this.auth.getUserdatafromtoken()._id;
    this.auth.getuserbyid(this.id).subscribe(res=>{
      this.user=res;

  });}
  ngAfterViewInit() {
    setTimeout(() => {
      const sidebarElement = document.querySelector('#sidebar');
      if (sidebarElement) {
        new PerfectScrollbar(sidebarElement);
      }
    }, 0);
  }





}
