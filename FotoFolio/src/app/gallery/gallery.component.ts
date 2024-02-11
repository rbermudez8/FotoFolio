import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  images = [
    { url: 'image1.jpg', title: 'Image 1', description: 'Description 1' },
    { url: 'image2.jpg', title: 'Image 2', description: 'Description 2' },
  ];

  selectedImage:any;

  onImageClick(image: any) {
    this.selectedImage = image;
  }

  closeFullScreen() {
    this.selectedImage = null;
  }
}
