import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiePaginaComponent } from './plantilla/pie-pagina/pie-pagina.component';
import { BarraNavComponent } from './plantilla/barra-nav/barra-nav.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    PiePaginaComponent,
    BarraNavComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
