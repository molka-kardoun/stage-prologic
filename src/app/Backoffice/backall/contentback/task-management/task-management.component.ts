import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { InternshipOfferService } from 'src/app/Core/Services/internship-offer.service';
import { TaskService } from 'src/app/Core/Services/task.service';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent  implements OnInit {
  interns: any[] = [];
  tasks: any[] = [];
  selectedInternId: string | null = null;
  newTask: any = {
    title: '',
    description: '',
    startDate: '',
    endDate: ''
  };

  constructor(
    private authService: AuthService,
    private taskService: TaskService,
    private internshipOfferService: InternshipOfferService
  ) {}

  ngOnInit(): void {
    const encadrantId = this.authService.getUserdatafromtoken()._id;
    this.internshipOfferService.getUsersForEncadrant(encadrantId).subscribe(users => {
      this.interns = users;
    });
  }

  selectIntern(internId: string): void {
    this.selectedInternId = internId;
    this.taskService.getTasksForIntern(internId).subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  createTask(): void {
    const encadrantId = this.authService.getUserdatafromtoken()._id;
    this.newTask.assignedTo = this.selectedInternId;
    this.newTask.internshipOfferId = encadrantId; // Assume encadrantId is used here, otherwise, use the correct ID
    this.taskService.createTask(this.newTask).subscribe(task => {
      this.tasks.push(task);
      this.resetTaskForm();
    });
  }

  approveTask(taskId: string): void {
    this.taskService.approveTask(taskId).subscribe(() => {
      const task = this.tasks.find(t => t._id === taskId);
      if (task) {
        task.approved = true; // Update task status locally
      }
    });
  }

  resetTaskForm(): void {
    this.newTask = {
      title: '',
      description: '',
      startDate: '',
      endDate: ''
    };
  }
}
