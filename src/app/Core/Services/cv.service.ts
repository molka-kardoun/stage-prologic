import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CV } from '../models/CV';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private apiUrl = 'http://localhost:3000/cv';  // Base API URL

  constructor(private http: HttpClient) {}

  // Fetch all CVs
  getCVs(): Observable<CV[]> {
    return this.http.get<CV[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Fetch a specific CV by ID
  getCV(id: string): Observable<CV> {
    return this.http.get<CV>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Add a new CV
  addCV(cv: CV): Observable<CV> {
    return this.http.post<CV>(this.apiUrl, cv).pipe(
      catchError(this.handleError)
    );
  }

  // Update an existing CV
  updateCV(id: string, cv: CV): Observable<CV> {
    return this.http.put<CV>(`${this.apiUrl}/${id}`, cv).pipe(
      catchError(this.handleError)
    );
  }

  // Fetch CV by User ID
  getCVByUserId(userId: string): Observable<CV> {
    return this.http.get<CV>(`${this.apiUrl}/user/${userId}`).pipe(
      catchError(this.handleError)
    );
  }

  // Delete a CV
  deleteCV(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Handle any errors from the HTTP request
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred
      errorMessage = `A client-side error occurred: ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code
      errorMessage = `Backend returned code ${error.status}, body was: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
