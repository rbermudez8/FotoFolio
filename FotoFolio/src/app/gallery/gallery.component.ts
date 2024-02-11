import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  images = [
    { url: 'Laguna_Ventanilla.jpg', title: 'Playa', description: 'The sandbar between the ocean and Laguna Ventanilla in Oaxaca, Mexico' },
    { url: 'Playa_de_Ziplote.jpg', title: 'Zipolite', description: 'Taken at the beach at Zipolite, Oaxaca, Mexico' },
    { url: 'Punta_Cometa.jpg', title: 'Punta Cometa', description: 'Taken at Punta Cometa in Mazunte, Oaxaca, Mexico' },
  ];

  selectedImage:any;

  onImageClick(image: any) {
    this.selectedImage = image;
  }

  closeFullScreen() {
    this.selectedImage = null;
  }
}
