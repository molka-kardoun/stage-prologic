import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CV } from '../models/CV';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private apiUrl = 'http://localhost:3000/api/cv';

  constructor(private http: HttpClient) {}

  getCVs(): Observable<CV[]> {
    return this.http.get<CV[]>(this.apiUrl);
  }

  getCV(id: string): Observable<CV> {
    return this.http.get<CV>(`${this.apiUrl}/${id}`);
  }

  addCV(cv: CV): Observable<CV> {
    return this.http.post<CV>(this.apiUrl, cv);
  }

  updateCV(id: string, cv: CV): Observable<CV> {
    return this.http.put<CV>(`${this.apiUrl}/${id}`, cv);
  }

  deleteCV(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
