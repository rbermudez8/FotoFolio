import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FullViewComponent } from './full-view/full-view.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    AboutComponent,
    HeaderComponent,
    FullViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
