import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-learning',
  imports: [],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
  constructor(private router:Router){}

  navigateToHome(){
    this.router.navigateByUrl('/home')
  }

}
