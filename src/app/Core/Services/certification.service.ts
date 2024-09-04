import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certification } from '../models/Certification';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  private apiUrl = 'http://localhost:3000/certification';

  constructor(private http: HttpClient) { }

  // Ajouter une nouvelle certification
  addCertification(certification: Certification): Observable<Certification> {
    return this.http.post<Certification>(`${this.apiUrl}/add`, certification);
  }

  // Obtenir toutes les certifications pour un utilisateur spécifique par ID utilisateur
  getCertificationsByUserId(userId: string): Observable<Certification[]> {
    return this.http.get<Certification[]>(`${this.apiUrl}/user/${userId}`);
  }

  // Obtenir une certification spécifique par ID
  getCertificationById(id: string): Observable<Certification> {
    return this.http.get<Certification>(`${this.apiUrl}/${id}`);
  }

  // Mettre à jour une certification par ID
  updateCertification(id: string, certification: Certification): Observable<Certification> {
    return this.http.put<Certification>(`${this.apiUrl}/${id}`, certification);
  }

  // Supprimer une certification par ID
  deleteCertification(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
