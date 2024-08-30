import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CV } from '../models/CV';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }
  private url='http://127.0.0.1:3000/user'
  register(user:any){
    return this.http.post(this.url+'/register',user)
  }
  login(user: any) {
    return this.http.post(`${this.url}/login`, user);
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
  loggedIn() {
    let token =localStorage.getItem('token');
    if(token){return true ;}
    else{
      return false;
    }

}
getCVByUserId(userId: string): Observable<CV> {
  return this.http.get<CV>(`${this.url}/cv/user/${userId}`);
}




updateUserCV(userId: string, cvId: string): Observable<User> {
  return this.http.put<User>(`${this.url}/user/${userId}/updateCV`, { cvId });
}


getUserdatafromtoken(){
  let token =localStorage.getItem('token');
  if(token){
    let data=JSON.parse(window.atob(token.split('.')[1]))
    return data;

}
}

getuserbyid(id:any){
  return this.http.get(`${this.url}/getbyid/${id}`);
}


}
