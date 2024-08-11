import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from '../models/Quiz';
import { Response } from '../models/Response';
import { Evaluation } from '../models/Evaluation';
;

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  createQuiz(quiz: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/quiz/create`, quiz);
  }

  getQuizzes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/quiz/all`);
  }
  submitQuiz(userId: string, offerId: string, responses: any[]): Observable<Evaluation> {
    const payload = { userId, offerId, responses };
    console.log('Payload:', payload); // Debug: check the payload before sending
    return this.http.post<Evaluation>(`${this.apiUrl}/evaluation/submit`, payload, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  getQuizById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/quiz/quizbyid/${id}`);
  }
}








