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

  addCertification(certification: Certification): Observable<Certification> {
    return this.http.post<Certification>(`${this.apiUrl}/add`, certification);
  }


  getCertificationsByUserId(userId: string): Observable<Certification[]> {
    return this.http.get<Certification[]>(`${this.apiUrl}/user/${userId}`);
  }

  getCertificationById(id: string): Observable<Certification> {
    return this.http.get<Certification>(`${this.apiUrl}/${id}`);
  }

  
  updateCertification(id: string, certification: Certification): Observable<Certification> {
    return this.http.put<Certification>(`${this.apiUrl}/${id}`, certification);
  }

  deleteCertification(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
