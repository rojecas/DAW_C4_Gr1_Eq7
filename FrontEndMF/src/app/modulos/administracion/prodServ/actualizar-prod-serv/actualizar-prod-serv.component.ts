import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProdServService } from 'src/app/servicios/prod-serv.service';

@Component({
  selector: 'app-actualizar-prod-serv',
  templateUrl: './actualizar-prod-serv.component.html',
  styleUrls: ['./actualizar-prod-serv.component.css']
})
export class ActualizarProdServComponent implements OnInit {
  id:string = '';
  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]],
    'imagen': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioProducto: ProdServService,
    private router : Router,
    private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.buscarProdServicio();
  }

  buscarProdServicio(){
    this.servicioProducto.ObtenerRegistroPorId(this.id).subscribe((datos:ModeloProducto)=>{
      this.fgValidador.controls["id"].setValue(datos.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["precio"].setValue(datos.precio);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidador.controls["imagen"].setValue(datos.imagen);
    });
  }

  EditarProducto() {
    let nombre = this.fgValidador.controls['nombre'].value;
    let descripcion = this.fgValidador.controls['descripcion'].value;
    let precio = parseInt(this.fgValidador.controls['precio'].value);
    let imagen = this.fgValidador.controls['imagen'].value;
    let p = new ModeloProducto();
    p.id = this.id;
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    p.imagen = imagen;
    this.servicioProducto.ActualizarProducto(p).subscribe((datos: ModeloProducto) => {
      alert('Producto editado satisfactoriamente');
      this.router.navigate(['/administracion/consultar-prod-serv']);
    }, (error: any) => {
      alert('Error actualizando un producto')
    });

  }

}
