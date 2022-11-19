import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
//const CryptoJS = require("crypto-js");
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'clave': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  IdentificarUsuario() {
    let usuario = this.fgValidador.controls['usuario'].value;
    let clave = this.fgValidador.controls['clave'].value;
    alert(clave)
    let claveCifrada = CryptoJS.MD5(clave).toString();
    alert(claveCifrada)
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos: any) => {
      // Ok 
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(['/inicio']);
      alert("Datos Correctos")
    }, (error: any) => {
      // nada esta Ok
      alert("Datos Invalidos")
    }) 
  }

}
