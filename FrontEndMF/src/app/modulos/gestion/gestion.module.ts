import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionRoutingModule } from './gestion-routing.module';
import { CrearAfiliacionesComponent } from './afiliaciones/crear-afiliaciones/crear-afiliaciones.component';
import { ConsultarAfiliacionesComponent } from './afiliaciones/consultar-afiliaciones/consultar-afiliaciones.component';
import { ActualizarAfiliacionesComponent } from './afiliaciones/actualizar-afiliaciones/actualizar-afiliaciones.component';
import { EliminarAfiliacionesComponent } from './afiliaciones/eliminar-afiliaciones/eliminar-afiliaciones.component';


@NgModule({
  declarations: [
    CrearAfiliacionesComponent,
    ConsultarAfiliacionesComponent,
    ActualizarAfiliacionesComponent,
    EliminarAfiliacionesComponent
  ],
  imports: [
    CommonModule,
    GestionRoutingModule
  ]
})
export class GestionModule { }
