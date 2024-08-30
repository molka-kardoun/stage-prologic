import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from 'src/app/Core/Services/task.service';

@Component({
  selector: 'app-progress-modal',
  templateUrl: './progress-modal.component.html',
  styleUrls: ['./progress-modal.component.css']
})
export class ProgressModalComponent {
  @Input() taskId: string | null = null;
  @Output() closeModal = new EventEmitter<void>();
  newProgress: number | null = null;

  constructor(private taskService: TaskService) {}

  updateProgress(): void {
    if (this.taskId && this.newProgress !== null) {
      this.taskService.updateTaskProgress(this.taskId, this.newProgress).subscribe(() => {
        this.closeModal.emit();
      });
    }
  }

  close(): void {
    this.closeModal.emit();
  }
}
