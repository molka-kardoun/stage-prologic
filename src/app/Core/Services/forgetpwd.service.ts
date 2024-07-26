import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpwdService {
  private apiUrl = 'http://localhost:3000/forget-password'; 

  constructor(private http: HttpClient) {}

  requestResetPassword(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/request-reset-password`, { email });
  }

  resetPassword(email: string, code: string, newPassword: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reset-password`, { email, code, newPassword });
  }
}
