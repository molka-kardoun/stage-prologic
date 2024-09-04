import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../models/Language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private apiUrl = 'http://localhost:3000/language'; // Base API URL

  constructor(private http: HttpClient) { }

  addLanguage(language: Language): Observable<Language> {
    return this.http.post<Language>(`${this.apiUrl}/add`, language); // Corresponds to POST /language/add
  }

  getLanguages(userId: string): Observable<Language[]> {
    return this.http.get<Language[]>(`${this.apiUrl}/user/${userId}`); // Corresponds to GET /language/user/:userId
  }

  getLanguageById(id: string): Observable<Language> {
    return this.http.get<Language>(`${this.apiUrl}/${id}`); // Corresponds to GET /language/:id
  }

  updateLanguage(id: string, language: Language): Observable<Language> {
    return this.http.put<Language>(`${this.apiUrl}/${id}`, language); // Corresponds to PUT /language/:id
  }

  deleteLanguage(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`); // Corresponds to DELETE /language/:id
  }
}
