import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-barra-nav',
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.css']
})
export class BarraNavComponent implements OnInit {

  sesionIniciada: boolean = false;  
  subs: Subscription=new Subscription();
  constructor(private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.seguridadServicio.obtenerDatosUsuarioEnSesion().subscribe((datos:ModeloIdentificar) => {
      this.sesionIniciada=datos.estaIdentificado;
      /* if(datos.estaIdentificado){
        this.sesionIniciada=false;
      }else{
        this.sesionIniciada=true;
      } */
    });
  }

}
