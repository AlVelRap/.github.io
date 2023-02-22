import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent {
  @Input() titulo =""
  @Input() body =""
  @Input() imagen =""
  @Input() pos =""
  @Input() bg =""
  @Input() color =""
}
