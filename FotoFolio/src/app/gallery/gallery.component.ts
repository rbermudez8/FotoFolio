import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FullViewComponent } from '../full-view/full-view.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  images = [
    { url: 'assets/photos/Laguna_Ventanilla.jpg', title: 'Laguna Ventanilla Sandbar', description: 'The sandbar between the ocean and Laguna Ventanilla in Mazunte, Oaxaca' },
    { url: 'assets/photos/Playa_de_Zipolite.jpg', title: 'Zipolite', description: 'Taken at the beach at Zipolite, Oaxaca' },
    { url: 'assets/photos/Punta_Cometa.jpg', title: 'Punta Cometa', description: 'Taken at Punta Cometa in Mazunte, Oaxaca' },
  ];
  
  selectedImage:any;

  constructor(private dialog: MatDialog) {}

  onImageClick(image: any) {
    this.dialog.open(FullViewComponent, {
      data: { image },
      width: '80vw',
      height: '80vh',
    });
  }

 openFullView(image: any) {
    this.selectedImage = this.selectedImage === image ? null : image;
 }

  closeFullView() {
    this.selectedImage = null;
    document.body.classList.remove('fullscreen-model-open'); // This removes the class added in onImageClick()
  }
}

