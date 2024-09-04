import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/Education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private apiUrl = 'http://localhost:3000/education';

  constructor(private http: HttpClient) { }

  addEducation(education: Education): Observable<Education> {
    return this.http.post<Education>(`${this.apiUrl}/add`, education);
  }

  getEducationsByUserId(userId: string): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.apiUrl}/user/${userId}`);
  }

  getEducationById(id: string): Observable<Education> {
    return this.http.get<Education>(`${this.apiUrl}/${id}`);
  }

  updateEducation(id: string, education: Education): Observable<Education> {
    return this.http.put<Education>(`${this.apiUrl}/${id}`, education);
  }

  deleteEducation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
