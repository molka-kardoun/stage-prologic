import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private apiUrl = 'http://localhost:3000/skill'; // Correction du chemin pour correspondre au contrôleur

  constructor(private http: HttpClient) { }

  addSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(`${this.apiUrl}/create`, skill); // Correspondance avec le contrôleur
  }

  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.apiUrl); // Correspondance avec le contrôleur
  }

  getSkillById(id: string): Observable<Skill> {
    return this.http.get<Skill>(`${this.apiUrl}/${id}`); // Correspondance avec le contrôleur
  }

  updateSkill(id: string, skill: Skill): Observable<Skill> {
    return this.http.put<Skill>(`${this.apiUrl}/update/${id}`, skill); // Correspondance avec le contrôleur
  }

  deleteSkill(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`); // Correspondance avec le contrôleur
  }
}
