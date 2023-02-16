import { Component, OnInit } from '@angular/core';
import { ComidasService } from '../servicios/comidas.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit{
  comidas: any

  constructor(private servicio: ComidasService) {}
  ngOnInit(): void {
    this.servicio.comidasCerdo().subscribe((data) => {
      this.comidas = data;
    });
  }

}
