import { Component, OnInit } from '@angular/core';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProdServService } from 'src/app/servicios/prod-serv.service';

@Component({
  selector: 'app-consultar-prod-serv',
  templateUrl: './consultar-prod-serv.component.html',
  styleUrls: ['./consultar-prod-serv.component.css']
})
export class ConsultarProdServComponent implements OnInit {

  listadoRegistros : ModeloProducto[]=[];
  constructor(private productoServicio: ProdServService ) { }

  ngOnInit(): void {
    this.ObtenerListadoProductos();
  }

    ObtenerListadoProductos(){
      this.productoServicio.ObtenerRegistros().subscribe((datos:ModeloProducto[])=>{
        this.listadoRegistros=datos;
      });
    } 

}
