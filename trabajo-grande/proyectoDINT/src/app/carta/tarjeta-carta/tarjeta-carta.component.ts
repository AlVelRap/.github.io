import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ComidasService } from 'src/app/servicios/comidas.service';

@Component({
  selector: 'app-tarjeta-carta',
  templateUrl: './tarjeta-carta.component.html',
  styleUrls: ['./tarjeta-carta.component.scss'],
})
export class TarjetaCartaComponent implements OnChanges {
  @Input() idPlato: any | undefined;
  plato: any;

  constructor(private servicio: ComidasService) {}

  ngOnChanges(changes: SimpleChanges): void {
    // for (let propName in changes) {
      if (changes['idPlato']) {
        this.servicio
          .getPlato(this.idPlato)
          .subscribe((data) => (this.plato = data));
      }
    // }
  }
}
