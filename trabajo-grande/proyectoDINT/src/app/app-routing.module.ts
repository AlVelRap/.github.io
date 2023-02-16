import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaComponent } from './carta/carta.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path:"",
    component:InicioComponent
  },
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"carta",
    component:CartaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
