import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../models/Experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private apiUrl = 'http://localhost:3000/experience';

  constructor(private http: HttpClient) { }

  addExperience(experience: Experience): Observable<Experience> {
    return this.http.post<Experience>(`${this.apiUrl}/add`, experience);
  }

  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.apiUrl}/getall`);
  }

  getExperienceById(id: string): Observable<Experience> {
    return this.http.get<Experience>(`${this.apiUrl}/getbyid/${id}`);
  }

  updateExperience(id: string, experience: Experience): Observable<Experience> {
    return this.http.put<Experience>(`${this.apiUrl}/update/${id}`, experience);
  }

  deleteExperience(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/del/${id}`);
  }
}
