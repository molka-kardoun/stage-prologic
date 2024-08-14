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

 // Add Education
 addEducation(education: Education): Observable<Education> {
  return this.http.post<Education>(`${this.apiUrl}/add`, education);
}

// Get All Educations
getAllEducations(): Observable<Education[]> {
  return this.http.get<Education[]>(this.apiUrl);
}

// Get Education by ID
getEducationById(id: string): Observable<Education> {
  return this.http.get<Education>(`${this.apiUrl}/${id}`);
}

// Update Education
updateEducation(id: string, education: Education): Observable<Education> {
  return this.http.put<Education>(`${this.apiUrl}/update/${id}`, education);
}

// Delete Education
deleteEducation(id: string): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
}
}



