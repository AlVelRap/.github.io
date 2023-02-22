import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { NavComponent } from './nav/nav.component';
import { VideoComponent } from './principal/video/video.component';
import { BodyComponent } from './principal/body/body.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CardComponent } from './gallery/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavComponent,
    VideoComponent,
    BodyComponent,
    FooterComponent,
    GalleryComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
