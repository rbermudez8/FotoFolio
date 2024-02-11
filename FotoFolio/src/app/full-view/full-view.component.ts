import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-full-view',
  templateUrl: './full-view.component.html',
  styleUrls: ['./full-view.component.scss']
})
export class FullViewComponent {
  @Input() image: any;
  @Output() close = new EventEmitter<void>();

  onCloseClick() {
    this.close.emit();
  }
}
