import { OnInit,AfterViewInit,Component, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy{
  
  constructor(){
    console.log("Constructor")
  }
  ngOnInit(): void {
    console.log("ngOnInit")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngAfterContentInit(): void {         //rarely used
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(): void {           //rarely used
    console.log("ngAfterContentChecked")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }
}
