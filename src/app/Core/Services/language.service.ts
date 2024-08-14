import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../models/Language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private apiUrl = 'http://localhost:3000/language';

  constructor(private http: HttpClient) { }

  addLanguage(language: Language): Observable<Language> {
    return this.http.post<Language>(`${this.apiUrl}/add`, language);
  }

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(`${this.apiUrl}/getall`);
  }

  getLanguageById(id: string): Observable<Language> {
    return this.http.get<Language>(`${this.apiUrl}/getbyid/${id}`);
  }

  updateLanguage(id: string, language: Language): Observable<Language> {
    return this.http.put<Language>(`${this.apiUrl}/update/${id}`, language);
  }

  deleteLanguage(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/del/${id}`);
  }
}
