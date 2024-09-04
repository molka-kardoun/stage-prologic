import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Lab } from '../../../../Core/models/Lab';
import { LabService } from '../../../../Core/Services/lab.service';

@Component({
  selector: 'app-create-lab',
  templateUrl: './create-lab.component.html',
  styleUrls: ['./create-lab.component.css']
})
export class CreateLabComponent {
  lab: Lab = {
    department: '',
    code: '',
    backup: false,
    ram: 0,
    disk: 0,
    processor: 0,
    start: new Date(),
    end: new Date(),
    goals: '',
    status: '',
    isAccepted: false,
    user: null
  };


  constructor(private labService: LabService, private router: Router) { }

  onSubmit(): void {
    this.labService.addLab(this.lab).subscribe(
      (response) => {
        console.log('Lab created successfully!', response);
        this.router.navigate(['/labs']); // Rediriger vers la liste des labs après la création
      },
      (error) => {
        console.error('Error creating lab', error);
      }
    );
  }
}