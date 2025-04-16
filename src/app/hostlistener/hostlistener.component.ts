import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-hostlistener',
  imports: [],
  templateUrl: './hostlistener.component.html',
  styleUrl: './hostlistener.component.css'
})
export class HostlistenerComponent {
  windowWidth: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.windowWidth = (event.target as Window).innerWidth;
  }
}
