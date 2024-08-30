import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../models/Language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private apiUrl = 'http://localhost:3000/language'; // Changement du chemin de base

  constructor(private http: HttpClient) { }

  addLanguage(language: Language): Observable<Language> {
    return this.http.post<Language>(`${this.apiUrl}/create`, language); // Correspondance avec le contrôleur
  }

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(`${this.apiUrl}/`); // Correspondance avec le contrôleur
  }

  getLanguageById(id: string): Observable<Language> {
    return this.http.get<Language>(`${this.apiUrl}/${id}`); // Correspondance avec le contrôleur
  }

  updateLanguage(id: string, language: Language): Observable<Language> {
    return this.http.put<Language>(`${this.apiUrl}/update/${id}`, language); // Correspondance avec le contrôleur
  }

  deleteLanguage(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`); // Correspondance avec le contrôleur
  }
}
