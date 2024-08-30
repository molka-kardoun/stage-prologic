import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InternshipOffer } from '../models/InternshipOffer';
import { Quiz } from '../models/Quiz';
import { InternStatus } from '../models/InternStatus';


@Injectable({
  providedIn: 'root'
})
export class InternshipOfferService {
  private apiUrl = 'http://127.0.0.1:3000/offer';

  constructor(private http: HttpClient) { }
  createInternshipOffer(offer: InternshipOffer): Observable<InternshipOffer> {
    return this.http.post<InternshipOffer>(`${this.apiUrl}/create`, offer);
  }

  getAllInternshipOffers(): Observable<InternshipOffer[]> {
    return this.http.get<InternshipOffer[]>(`${this.apiUrl}/all`);
  }

  assignQuizToOffer(offerId: string, quizId: string): Observable<InternshipOffer> {
    return this.http.post<InternshipOffer>(`${this.apiUrl}/${offerId}/assign`, { offerId, quizId });
  }

  getQuizForOffer(offerId: string): Observable<Quiz> {
    return this.http.get<Quiz>(`${this.apiUrl}/${offerId}`);
  }
  getInternshipOfferById(id: string): Observable<InternshipOffer> { // New function to get offer by ID
    return this.http.get<InternshipOffer>(`${this.apiUrl}/internship-offers/${id}`);
  }
  getDetailedInternshipOffers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/details`);
  }

 // Fonction pour mettre à jour le statut d'un utilisateur
 updateUserStatus(userId: string, newStatus: string): Observable<void> {
  return this.http.patch<void>(`${this.apiUrl}/${userId}/status`, { status: newStatus });
}
getAcceptedUsersForOffers(): Observable<any> {
  return this.http.get(`${this.apiUrl}/accepted-users`);
}

getUsersWithRoleEncadrant(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/encadrants`);
}
assignEncadrantToOffer(encadrantId: string, offerId: string): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/assignEncadrant`, { encadrantId, offerId });
}
getOffersWithEncadrantAndAcceptedUsers(): Observable<any> {

  return this.http.get<any>(`${this.apiUrl}/offers-encadrant-accepted-users`);
}
getUsersForEncadrant(encadrantId: string): Observable<any> {
  return this.http.get(`${this.apiUrl}/users-for-encadrant/${encadrantId}`);
}

getUsersofferForEncadrant(encadrantId: string): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/encadrantinfo/${encadrantId}`);
}

}


