import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css']
})
export class PiePaginaComponent implements OnInit {
  sesionIniciada: boolean = false;
  subs: Subscription = new Subscription();
  constructor(private seguridadServicio: SeguridadService) {
  }

  ngOnInit(): void {
    this.subs = this.seguridadServicio.obtenerDatosUsuarioEnSesion().subscribe((datos: ModeloIdentificar) => {
      this.sesionIniciada = datos.estaIdentificado;});
    }

}
