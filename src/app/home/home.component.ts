import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // For Ng Class
  div1BgColor: string='bg-primary';
  isDiv2Active: boolean=false;    // second scenario condition wise
  // Third scenario equality comparison
  num1:string=''
  num2:string=''

  // fourth scenario check box and select
  isActive:boolean=false;

// Ng Style
  studentDetails: any[] = [
    { studId: 1, studName: 'AAA', gender: "male", totalMarks: 62,city: "Pune", isActive: false },
    { studId: 2, studName: 'BBB', gender: "female", totalMarks: 85,city: "Mumbai", isActive: true },
    { studId: 3, studName: 'CCC', gender: "male", totalMarks: 78,city: "Delhi", isActive: false },
  ];

  addRedClass(){
    this.div1BgColor='bg-danger'

  }
  addBlueColor(){
    this.div1BgColor='bg-primary'
  }
  toggleDiv2Class(){
    this.isDiv2Active=!this.isDiv2Active;
  }



}
