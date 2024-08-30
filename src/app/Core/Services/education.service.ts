import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Education } from '../models/Education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private apiUrl = 'http://localhost:3000/education'; // Mise à jour de l'URL de base

  constructor(private http: HttpClient) { }

  // Ajouter une nouvelle éducation
  addEducation(education: Education): Observable<Education> {
    return this.http.post<Education>(`${this.apiUrl}`, education)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Récupérer toutes les éducations
  getAllEducations(): Observable<Education[]> {
    return this.http.get<Education[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Récupérer une éducation par ID
  getEducationById(id: string): Observable<Education> {
    return this.http.get<Education>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Mettre à jour une éducation
  updateEducation(id: string, education: Education): Observable<Education> {
    return this.http.put<Education>(`${this.apiUrl}/${id}`, education)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Supprimer une éducation
  deleteEducation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Gestion des erreurs HTTP
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
}
