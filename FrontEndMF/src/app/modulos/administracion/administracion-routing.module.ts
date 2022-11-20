import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { ActualizarMascotasComponent } from './mascotas/actualizar-mascotas/actualizar-mascotas.component';
import { ConsultarMascotasComponent } from './mascotas/consultar-mascotas/consultar-mascotas.component';
import { CrearMascotasComponent } from './mascotas/crear-mascotas/crear-mascotas.component';
import { EliminarMascotasComponent } from './mascotas/eliminar-mascotas/eliminar-mascotas.component';
import { ListarMascotasComponent } from './mascotas/listar-mascotas/listar-mascotas.component';
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
    component: CrearUsuarioComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'actualizar-usuario',
    component: ActualizarUsuarioComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'consultar-usuario',
    component: ConsultarUsuarioComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'eliminar-usuario',
    component: EliminarUsuarioComponent,
    canActivate:[ValidadorSesionGuard]
  },
/*  Rutas de Admin Sucursal */
  {
    path: 'crear-sucursal',
    component: CrearSucursalComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'actualizar-sucursal',
    component: ActualizarSucursalComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'consultar-sucursal',
    component: ConsultarSucursalComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'eliminar-sucursal',
    component: EliminarSucursalComponent,
    canActivate:[ValidadorSesionGuard]
  },
/*  Rutas de Admin Productos Servicios */
  {
    path: 'crear-prod-serv',
    component: CrearProdServComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'actualizar-prod-serv/:id',
    component: ActualizarProdServComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'consultar-prod-serv',
    component: ConsultarProdServComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path: 'eliminar-prod-serv',
    component: EliminarProdServComponent,
    canActivate:[ValidadorSesionGuard]
  },
  /*  Rutas de Admin Mascotas */
    {
      path: 'crear-mascota',
      component: CrearMascotasComponent,
      canActivate:[ValidadorSesionGuard]
    },
    {
      path: 'actualizar-mascotas',
      component: ActualizarMascotasComponent,
      canActivate:[ValidadorSesionGuard]
    },
    {
      path: 'consultar-mascotas',
      component: ConsultarMascotasComponent,
      canActivate:[ValidadorSesionGuard]
    },
    {
      path: 'eliminar-mascotas',
      component: EliminarMascotasComponent,
      canActivate:[ValidadorSesionGuard]
    },
    {
      path: 'listar-mascotas',
      component: ListarMascotasComponent,
      canActivate:[ValidadorSesionGuard]
    },
    /*  Rutas de Admin Prospectos */
      {
        path: 'crear-prospectos',
        component: CrearProspectosComponent,
        canActivate:[ValidadorSesionGuard]
      },
      {
        path: 'actualizar-prospectos',
        component: ActualizarProspectosComponent,
        canActivate:[ValidadorSesionGuard]
      },
      {
        path: 'consultar-prospectos',
        component: ConsultarProspectosComponent,
        canActivate:[ValidadorSesionGuard]
      },
      {
        path: 'eliminar-prospectos',
        component: EliminarProspectosComponent,
        canActivate:[ValidadorSesionGuard]
      },
      /*  Rutas de Admin Planes */
        {
          path: 'crear-planes',
          component: CrearPlanesComponent,
          canActivate:[ValidadorSesionGuard]
        },
        {
          path: 'actualizar-planes',
          component: ActualizarPlanesComponent,
          canActivate:[ValidadorSesionGuard]
        },
        {
          path: 'consultar-planes',
          component: ConsultarPlanesComponent,
          canActivate:[ValidadorSesionGuard]
        },
        {
          path: 'eliminar-planes',
          component: EliminarPlanesComponent,
          canActivate:[ValidadorSesionGuard]
        }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
