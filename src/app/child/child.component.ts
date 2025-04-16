import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="p-4 border rounded bg-blue-100">
      <p>Child received: <strong>{{ item }}</strong></p>
      <button (click)="sendBack()" class="bg-blue-500 text-black px-3 py-1 rounded mt-2">
        Emit Back to Parent
      </button>
    </div>
  `
})
export class ChildComponent {
  @Input() item: string = '';
  @Output() notifyParent = new EventEmitter<string>();

  sendBack() {
    this.notifyParent.emit(`Child clicked and sent back: ${this.item}`);
  }
}
