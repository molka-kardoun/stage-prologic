import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InternshipOffer } from '../models/InternshipOffer';

@Injectable({
  providedIn: 'root'
})
export class InternshipOfferService {

  private apiUrl = 'http://localhost:3000/internshipOffer'; // Ensure the URL matches the Express routes

  constructor(private http: HttpClient) { }

  getInternshipOffers(): Observable<InternshipOffer[]> {
    return this.http.get<InternshipOffer[]>(`${this.apiUrl}/getall`);
  }

  getInternshipOfferById(id: string): Observable<InternshipOffer> {
    return this.http.get<InternshipOffer>(`${this.apiUrl}/getbyid/${id}`);
  }

  addInternshipOffer(internshipOffer: InternshipOffer): Observable<InternshipOffer> {
    return this.http.post<InternshipOffer>(`${this.apiUrl}/add`, internshipOffer);
  }

  updateInternshipOffer(id: string, internshipOffer: InternshipOffer): Observable<InternshipOffer> {
    return this.http.put<InternshipOffer>(`${this.apiUrl}/update/${id}`, internshipOffer);
  }

  deleteInternshipOffer(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/del/${id}`);
  }
}
