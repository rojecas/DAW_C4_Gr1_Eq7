import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { ConsultarUsuarioComponent } from './usuarios/consultar-usuario/consultar-usuario.component';
import { ActualizarUsuarioComponent } from './usuarios/actualizar-usuario/actualizar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { ActualizarProdServComponent } from './prodServ/actualizar-prod-serv/actualizar-prod-serv.component';
import { EliminarProdServComponent } from './prodServ/eliminar-prod-serv/eliminar-prod-serv.component';
import { CrearProdServComponent } from './prodServ/crear-prod-serv/crear-prod-serv.component';
import { ConsultarProdServComponent } from './prodServ/consultar-prod-serv/consultar-prod-serv.component';
import { CrearSucursalComponent } from './sucursal/crear-sucursal/crear-sucursal.component';
import { ConsultarSucursalComponent } from './sucursal/consultar-sucursal/consultar-sucursal.component';
import { ActualizarSucursalComponent } from './sucursal/actualizar-sucursal/actualizar-sucursal.component';
import { EliminarSucursalComponent } from './sucursal/eliminar-sucursal/eliminar-sucursal.component';
import { CrearMascotasComponent } from './mascotas/crear-mascotas/crear-mascotas.component';
import { ConsultarMascotasComponent } from './mascotas/consultar-mascotas/consultar-mascotas.component';
import { ActualizarMascotasComponent } from './mascotas/actualizar-mascotas/actualizar-mascotas.component';
import { EliminarMascotasComponent } from './mascotas/eliminar-mascotas/eliminar-mascotas.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    CrearUsuarioComponent,
    ConsultarUsuarioComponent,
    ActualizarUsuarioComponent,
    EliminarUsuarioComponent,
    ActualizarProdServComponent,
    EliminarProdServComponent,
    CrearProdServComponent,
    ConsultarProdServComponent,
    CrearSucursalComponent,
    ConsultarSucursalComponent,
    ActualizarSucursalComponent,
    EliminarSucursalComponent,
    CrearMascotasComponent,
    ConsultarMascotasComponent,
    ActualizarMascotasComponent,
    EliminarMascotasComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
