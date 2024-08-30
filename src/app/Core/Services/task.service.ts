import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://127.0.0.1:3000/task';

  constructor(private http: HttpClient) { }

  createTask(taskData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, taskData);
  }

  getTasksForIntern(internId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/intern/${internId}`);
  }

  updateTaskProgress(taskId: string, progress: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${taskId}`, { progress });
  }

  approveTask(taskId: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/approve/${taskId}`, {});
  }
}
