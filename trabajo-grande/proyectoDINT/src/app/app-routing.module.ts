import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodasComponent } from './bodas/bodas.component';
import { CartaComponent } from './carta/carta.component';
import { InicioComponent } from './inicio/inicio.component';
import { ModalComponent } from './modal/modal.component';
import { ReservarComponent } from './reservar/reservar.component';
import { RestauranteComponent } from './restaurante/restaurante.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'carta',
    component: CartaComponent,
  },
  {
    path: 'restaurante',
    component: RestauranteComponent,
  },
  {
    path: 'bodas',
    component: BodasComponent,
  },
  {
    path: 'reservar',
    component: ReservarComponent,
  },
  {
    path: 'acceder',
    component: ModalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
