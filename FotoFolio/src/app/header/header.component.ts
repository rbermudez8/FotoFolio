import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logoUrl: string = "assets/logo.png"

  constructor() { }

  getLogoUrl(): string {
    return this.logoUrl;
  }
}
