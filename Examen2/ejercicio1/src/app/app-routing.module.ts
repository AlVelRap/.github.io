import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {
    path:"",
    component:PrincipalComponent
  },
  {
    path:"home",
    component:PrincipalComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
