import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


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
