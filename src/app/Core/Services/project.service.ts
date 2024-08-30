import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { projet } from '../models/Projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private apiUrl = 'http://localhost:3000/project';  // Mise à jour de l'URL de l'API

  constructor(private http: HttpClient) { }


    // Méthode pour créer un projet
    createProject(project: projet): Observable<projet> {
      return this.http.post<projet>(`${this.apiUrl}/add`, project); // Appelle la route '/projects/add'
    }


    getProjectsByUserId(userId: string): Observable<projet[]> {
      return this.http.get<projet[]>(`${this.apiUrl}/userProjects/${userId}`);
    }
    

  // Méthode pour récupérer un projet spécifique par ID
  getProjectById(id: string): Observable<projet> {
    return this.http.get<projet>(`${this.apiUrl}/${id}`);
  }

  // Méthode pour mettre à jour un projet
  updateProject(id: string, project: projet): Observable<projet> {
    return this.http.put<projet>(`${this.apiUrl}/${id}`, project);
  }

  // Méthode pour supprimer un projet
  deleteProject(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
