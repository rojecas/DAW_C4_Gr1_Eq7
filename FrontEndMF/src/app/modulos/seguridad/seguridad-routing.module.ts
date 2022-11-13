import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';

// Hay que definir las rutas a los modulos aqui:
const routes: Routes = [
{/*  Rutas de Identificacion de Usuario */
  path:"identificar",
  component: IdentificacionComponent
},
{/*  Rutas de Identificacion de Usuario */
path:"cambiar-clave",
component: CambiarClaveComponent
},
{/*  Rutas de Identificacion de Usuario */
path:"recuperar-clave",
component: RecuperarClaveComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
