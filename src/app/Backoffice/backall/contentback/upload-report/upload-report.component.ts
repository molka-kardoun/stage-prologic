import { Component } from '@angular/core';
import { AuthService } from 'src/app/Core/Services/auth.service';
import { TaskService } from 'src/app/Core/Services/task.service';

@Component({
  selector: 'app-upload-report',
  templateUrl: './upload-report.component.html',
  styleUrls: ['./upload-report.component.css']
})
export class UploadReportComponent {
  selectedFile: File | null = null;
  message: string = '';

  constructor(private internService: TaskService, private authService: AuthService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      const userId = this.authService.getUserdatafromtoken()._id;
      this.internService.uploadReport(userId, this.selectedFile).subscribe(
        response => this.message = 'Report uploaded succesfully !',
        error => this.message = 'Error while uploading report.'
      );
    }
  }
}
