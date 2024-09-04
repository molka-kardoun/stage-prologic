import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private apiUrl = 'http://localhost:3000/skill'; // Base API URL

  constructor(private http: HttpClient) { }

  addSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(`${this.apiUrl}/add`, skill); // Corresponds to POST /skill/add
  }

  getSkills(userId: string): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.apiUrl}/user/${userId}`); // Corresponds to GET /skill/user/:userId
  }

  getSkillById(id: string): Observable<Skill> {
    return this.http.get<Skill>(`${this.apiUrl}/${id}`); // Corresponds to GET /skill/:id
  }

  updateSkill(id: string, skill: Skill): Observable<Skill> {
    return this.http.put<Skill>(`${this.apiUrl}/${id}`, skill); // Corresponds to PUT /skill/:id
  }

  deleteSkill(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`); // Corresponds to DELETE /skill/:id
  }
}
