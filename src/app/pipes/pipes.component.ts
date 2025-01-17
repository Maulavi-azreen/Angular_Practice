import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable,interval,map } from 'rxjs';
import { NaPipe } from '../na.pipe';

@Component({
  selector: 'app-pipes',
  imports: [UpperCasePipe,DatePipe,JsonPipe, AsyncPipe, NaPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  firstName:string="Angular";
  currentDate:Date=new Date();

  student:any={
    studName:"Maahi",
    city:"Pune",
    state:''
  };

  currentTime:Observable<Date>=new Observable<Date>

  constructor(){
    this.currentTime=interval(1000).pipe(map(()=>new Date()))
  }
}
