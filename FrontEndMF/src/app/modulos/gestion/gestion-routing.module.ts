import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearContactameComponent } from './contactame/crear-contactame/crear-contactame.component';

const routes: Routes = [

  {
    path: 'contactame',
    component: CrearContactameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule { }
