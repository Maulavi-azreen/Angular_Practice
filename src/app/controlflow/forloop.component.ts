import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forloop',
  imports: [FormsModule],
  templateUrl: './forloop.component.html',
  styleUrl: './forloop.component.css'
})
export class ForloopComponent {
  cityNames: string[] = ['Pune', 'Mumbai', 'Delhi'];  // Array of cities

  studentDetails: any[] = [
    { studId: 1, studName: 'AAA', city: "Pune", isActive: false },
    { studId: 2, studName: 'BBB', city: "Mumbai", isActive: true },
    { studId: 3, studName: 'CCC', city: "Delhi", isActive: false },
  ];

  dayNumber:string=""

  
}
