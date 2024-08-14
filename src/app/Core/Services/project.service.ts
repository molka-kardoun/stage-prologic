// src/app/Core/Services/projet.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { projet } from '../models/Projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private apiUrl = 'http://localhost:3000/project';  // Assurez-vous que cette URL est correcte.

  constructor(private http: HttpClient) { }

 // Create Project
 createProject(projet: projet): Observable<projet> {
  return this.http.post<projet>(`${this.apiUrl}/add`, projet);
}

// Get All Projects
getAllProjects(): Observable<projet[]> {
  return this.http.get<projet[]>(this.apiUrl);
}

// Get Project by ID
getProjectById(id: string): Observable<projet> {
  return this.http.get<projet>(`${this.apiUrl}/${id}`);
}

// Update Project
updateProject(id: string, projet: projet): Observable<projet> {
  return this.http.put<projet>(`${this.apiUrl}/update/${id}`, projet);
}

// Delete Project
deleteProject(id: string): Observable<any> {
  return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
}
}
