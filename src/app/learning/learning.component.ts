import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-learning',
  imports: [ChildComponent],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
  constructor(private router:Router){}

  navigateToHome(){
    this.router.navigateByUrl('/home')
  }
  dataToSend = 'Hello Angular!';
  messageFromChild = '';

  receiveFromChild(message: string) {
    this.messageFromChild = message;
  }

}
