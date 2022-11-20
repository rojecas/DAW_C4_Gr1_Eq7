import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parse } from 'path';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProdServService } from 'src/app/servicios/prod-serv.service';

@Component({
  selector: 'app-crear-prod-serv',
  templateUrl: './crear-prod-serv.component.html',
  styleUrls: ['./crear-prod-serv.component.css']
})
export class CrearProdServComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]],
    'imagen': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioproducto: ProdServService,
    private router : Router)
    {}

  ngOnInit(): void {
  }

  GuardarProducto() {
    let nombre = this.fgValidador.controls['nombre'].value;
    let descripcion = this.fgValidador.controls['descripcion'].value;
    let precio = parseInt(this.fgValidador.controls['precio'].value);
    let imagen = this.fgValidador.controls['imagen'].value;
    let p = new ModeloProducto();
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    p.imagen = imagen;
    this.servicioproducto.CrearProducto(p).subscribe((datos: ModeloProducto) => {
      alert('Producto creado satisfactoriamente');
      this.router.navigate(['/administracion/consultar-prod-serv']);
    }, (error: any) => {
      alert('Error Creando un producto')
    });

  }
}
