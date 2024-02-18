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
    { url: 'assets/photos/Playa_de_Zipolite.jpg', title: 'Zipolite', description: 'Friends and Family at beach in Zipolite, Oaxaca' },
    { url: 'assets/photos/Punta_Cometa.jpg', title: 'Punta Cometa', description: 'A man watches the waves come in at Punta Cometa in Mazunte, Oaxaca' },
    { url: 'assets/photos/Puerto_Escondido.jpg', title: 'Puerto Escondido', description: 'Playa Carrizalillo in Puerto Escondido, Oaxaca' },
    { url: 'assets/photos/Jacobo_Maria.jpg', title: 'Taller Jacobo y María Angeles', description: 'Workshop where Alebrijes are handmade in San Martín Tilcajete' },
    { url: 'assets/photos/Gentrification.jpg', title: 'Gentrification in Oaxaca', description: 'Modern times' },
  ];
  
  selectedImage: any;

  constructor(private dialog: MatDialog) {}

  onImageClick(image: any) {
    this.dialog.open(FullViewComponent, {
      data: { image },
      width: '80vw',
      height: '80vh',
    });
  }

  openFullView(image: any) {
    this.dialog.open(FullViewComponent, {
      data: image,
      width: '100vw',
      height: '100vh',
    });
  }

  closeFullView() {
    this.selectedImage = null;
    document.body.classList.remove('fullscreen-modal-open'); // Remove the class added in openFullView()
  }
}

