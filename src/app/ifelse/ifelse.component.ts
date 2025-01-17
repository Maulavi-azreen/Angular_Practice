import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ifelse',
  imports:[CommonModule,FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent {
  isDiv1Visible: boolean = false;
  isWarningDIvVisible:boolean=false;
  selectedState:string=''

  showDiv1() {
    this.isDiv1Visible = true;
  }

  hideDiv1() {
    this.isDiv1Visible = false;
  }

  toggleDiv2() {
    this.isWarningDIvVisible=!this.isWarningDIvVisible;
  }
}
