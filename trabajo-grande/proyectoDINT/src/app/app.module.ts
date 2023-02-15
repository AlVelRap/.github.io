import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeroComponent } from './inicio/hero/hero.component';
import { BodyComponent } from './inicio/body/body.component';
import { TarjetaComponent } from './inicio/body/tarjeta/tarjeta.component';
import { FormularioComponent } from './inicio/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    InicioComponent,
    HeroComponent,
    BodyComponent,
    TarjetaComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
