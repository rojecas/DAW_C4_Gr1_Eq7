import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarMascotasComponent } from './mascotas/actualizar-mascotas/actualizar-mascotas.component';
import { ConsultarMascotasComponent } from './mascotas/consultar-mascotas/consultar-mascotas.component';
import { CrearMascotasComponent } from './mascotas/crear-mascotas/crear-mascotas.component';
import { EliminarMascotasComponent } from './mascotas/eliminar-mascotas/eliminar-mascotas.component';
import { ActualizarPlanesComponent } from './planes/actualizar-planes/actualizar-planes.component';
import { ConsultarPlanesComponent } from './planes/consultar-planes/consultar-planes.component';
import { CrearPlanesComponent } from './planes/crear-planes/crear-planes.component';
import { EliminarPlanesComponent } from './planes/eliminar-planes/eliminar-planes.component';
import { ActualizarProdServComponent } from './prodServ/actualizar-prod-serv/actualizar-prod-serv.component';
import { ConsultarProdServComponent } from './prodServ/consultar-prod-serv/consultar-prod-serv.component';
import { CrearProdServComponent } from './prodServ/crear-prod-serv/crear-prod-serv.component';
import { EliminarProdServComponent } from './prodServ/eliminar-prod-serv/eliminar-prod-serv.component';
import { ActualizarProspectosComponent } from './prospectos/actualizar-prospectos/actualizar-prospectos.component';
import { ConsultarProspectosComponent } from './prospectos/consultar-prospectos/consultar-prospectos.component';
import { CrearProspectosComponent } from './prospectos/crear-prospectos/crear-prospectos.component';
import { EliminarProspectosComponent } from './prospectos/eliminar-prospectos/eliminar-prospectos.component';
import { ActualizarSucursalComponent } from './sucursal/actualizar-sucursal/actualizar-sucursal.component';
import { ConsultarSucursalComponent } from './sucursal/consultar-sucursal/consultar-sucursal.component';
import { CrearSucursalComponent } from './sucursal/crear-sucursal/crear-sucursal.component';
import { EliminarSucursalComponent } from './sucursal/eliminar-sucursal/eliminar-sucursal.component';
import { ActualizarUsuarioComponent } from './usuarios/actualizar-usuario/actualizar-usuario.component';
import { ConsultarUsuarioComponent } from './usuarios/consultar-usuario/consultar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  /*  Rutas de Admin Usuario */
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  {
    path: 'actualizar-usuario',
    component: ActualizarUsuarioComponent
  },
  {
    path: 'consultar-usuario',
    component: ConsultarUsuarioComponent
  },
  {
    path: 'eliminar-usuario',
    component: EliminarUsuarioComponent
  },
/*  Rutas de Admin Sucursal */
  {
    path: 'crear-sucursal',
    component: CrearSucursalComponent
  },
  {
    path: 'actualizar-sucursal',
    component: ActualizarSucursalComponent
  },
  {
    path: 'consultar-sucursal',
    component: ConsultarSucursalComponent
  },
  {
    path: 'eliminar-sucursal',
    component: EliminarSucursalComponent
  },
/*  Rutas de Admin Productos Servicios */
  {
    path: 'crear-prod-serv',
    component: CrearProdServComponent
  },
  {
    path: 'actualizar-prod-serv',
    component: ActualizarProdServComponent
  },
  {
    path: 'consultar-prod-serv',
    component: ConsultarProdServComponent
  },
  {
    path: 'eliminar-prod-serv',
    component: EliminarProdServComponent
  },
  /*  Rutas de Admin Mascotas */
    {
      path: 'crear-mascotas',
      component: CrearMascotasComponent
    },
    {
      path: 'actualizar-mascotas',
      component: ActualizarMascotasComponent
    },
    {
      path: 'consultar-mascotas',
      component: ConsultarMascotasComponent
    },
    {
      path: 'eliminar-mascotas',
      component: EliminarMascotasComponent
    },
    /*  Rutas de Admin Prospectos */
      {
        path: 'crear-prospectos',
        component: CrearProspectosComponent
      },
      {
        path: 'actualizar-prospectos',
        component: ActualizarProspectosComponent
      },
      {
        path: 'consultar-prospectos',
        component: ConsultarProspectosComponent
      },
      {
        path: 'eliminar-prospectos',
        component: EliminarProspectosComponent
      },
      /*  Rutas de Admin Planes */
        {
          path: 'crear-planes',
          component: CrearPlanesComponent
        },
        {
          path: 'actualizar-planes',
          component: ActualizarPlanesComponent
        },
        {
          path: 'consultar-planes',
          component: ConsultarPlanesComponent
        },
        {
          path: 'eliminar-planes',
          component: EliminarPlanesComponent
        }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
