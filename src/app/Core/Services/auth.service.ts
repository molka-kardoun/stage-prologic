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
  private role: string = ''; // Store the role here

  constructor(private http:HttpClient,private router:Router) { }
  private url='http://127.0.0.1:3000/user'
  register(user:any){
    return this.http.post(this.url+'/register',user)
  }
  login(user: any) {
    return this.http.post(`${this.url}/login`, user);
  }
  logout() {
    localStorage.removeItem('token');
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
getRole(): string {
  if (!this.role) {
    // Fetch role from token or server if not already set
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        this.role = payload.role;
      } catch (e) {
        console.error('Error parsing token payload:', e);
        this.role = ''; // Reset role if there's an error
      }
    }
  }
  return this.role;
}


updateProfile(id: string, userData: FormData) {
  return this.http.put(`${this.url}/update/${id}`, userData);
}



}
