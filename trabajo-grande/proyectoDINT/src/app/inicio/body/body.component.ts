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
  img_boda = '../../../../assets/bodas.jpeg';

  titulo_restaurante = 'RESTAURANTE';
  body_restaurante =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,';
  img_restaurante = '../../../../assets/restaurante.jpg';

  titulo_carta = 'CARTA';
  body_carta =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,';
  img_carta = '../../../../assets/carta.jpg';

  direccion = ["izquierda","derecha","izquierda"]
}
