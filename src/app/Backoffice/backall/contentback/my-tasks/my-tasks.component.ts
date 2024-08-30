import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { TaskService } from 'src/app/Core/Services/task.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {
  tasks: any[] = [];
  selectedTaskId: string | null = null;
  constructor(
    private authService: AuthService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const internId = this.authService.getUserdatafromtoken()._id;
    this.taskService.getTasksForIntern(internId).subscribe(tasks => {
      this.tasks = tasks;
    });
  }
  openModal(taskId: string): void {
    this.selectedTaskId = taskId;
  }

  closeModal(): void {
    this.selectedTaskId = null;
    this.ngOnInit(); // Optionally refresh tasks to get updated progress
  }
 
}
