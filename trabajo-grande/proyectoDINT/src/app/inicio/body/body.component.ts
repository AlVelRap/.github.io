import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  titulo_boda = 'BODAS';
  body_boda =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,';
  img_boda = '../../../../assets/media/images/bodas.jpeg';

  titulo_restaurante = 'RESTAURANTE';
  body_restaurante =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,';
  img_restaurante = '../../../../assets/media/images/restaurante.jpg';

  titulo_carta = 'CARTA';
  body_carta =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,';
  img_carta = '../../../../assets/media/images/carta.jpg';

  direccion = ["izquierda","derecha","izquierda"]
  fondo=["#4B3900","#837656","#D6C5A0"]
  texto=["#FFFFFF","#FFFFFF","#000000"]
}
