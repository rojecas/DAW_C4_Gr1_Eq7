import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },
 /*  {
    path: "/",
    pathMatch:"full" ,
    redirecTo:"/inicio"
  },
  {
    path: "",
    component: 
  },
  {
    path: "",
    component: 
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
