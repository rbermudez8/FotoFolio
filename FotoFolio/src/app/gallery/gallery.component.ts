import { Component, OnInit } from '@angular/core';
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

  onImageClick(image: any) {
    this.selectedImage = image;
    document.body.classList.add('fullscreen-model-open'); //This adds a class to the body to apply styles for the fullscreen modal
  }

 openFullView() {
  
 }

  closeFullView() {
    this.selectedImage = null;
    document.body.classList.remove('fullscreen-model-open'); // This removes the class added in onImageClick()
  }
}

