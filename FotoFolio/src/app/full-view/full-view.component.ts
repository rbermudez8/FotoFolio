import { Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-full-view',
  templateUrl: './full-view.component.html',
  styleUrls: ['./full-view.component.scss']
})
export class FullViewComponent {
  image: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.image = data.image;
  }

  closeFullView() {
    this.image = null;
    document.body.classList.remove('fullscreen-modal-open'); // Remove the class added in openFullView()
  }

}
