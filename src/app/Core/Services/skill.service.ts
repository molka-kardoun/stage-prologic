import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private apiUrl = 'http://localhost:3000/skill'; // Ensure the URL matches the Express routes

  constructor(private http: HttpClient) { }

  
  addSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(`${this.apiUrl}/add`, skill);
  }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/getall`);
  }

  getSkillById(id: string): Observable<Skill> {
    return this.http.get<Skill>(`${this.apiUrl}/getbyid/${id}`);
  }

  updateSkill(id: string, skill: Skill): Observable<Skill> {
    return this.http.put<Skill>(`${this.apiUrl}/update/${id}`, skill);
  }

  deleteSkill(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/del/${id}`);
  }
}
