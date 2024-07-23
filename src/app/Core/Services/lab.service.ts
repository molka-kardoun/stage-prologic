import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lab } from '../models/Lab';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  private apiUrl = 'http://localhost:3000/lab'; // Assurez-vous que l'URL correspond à celle définie dans les routes Express

  constructor(private http: HttpClient) { }

  // Récupérer tous les labs
  getLabs(): Observable<Lab[]> {
    return this.http.get<Lab[]>(`${this.apiUrl}/getall`);
  }

  // Récupérer un lab par son ID
  getLabById(id: string): Observable<Lab> {
    return this.http.get<Lab>(`${this.apiUrl}/getbyid/${id}`);
  }

  // Ajouter un nouveau lab
  addLab(lab: Lab): Observable<Lab> {
    return this.http.post<Lab>(`${this.apiUrl}/add`, lab);
  }

  // Mettre à jour un lab existant
  updateLab(id: string, lab: Lab): Observable<Lab> {
    return this.http.put<Lab>(`${this.apiUrl}/update/${id}`, lab);
  }

  // Supprimer un lab par son ID
  deleteLab(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/del/${id}`);
  }
}
