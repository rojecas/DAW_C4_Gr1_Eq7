import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ModeloProducto } from '../modelos/producto.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProdServService {
  url = 'http://localhost:3000';
  token: string = '';
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros(): Observable<ModeloProducto[]> {
    return this.http.get<ModeloProducto[]>(`${this.url}/producto-servicios`);
  }

  ObtenerRegistroPorId(id:string): Observable<ModeloProducto> {
    return this.http.get<ModeloProducto>(`${this.url}/producto-servicios/${id}`);
  }

  CrearProducto(producto: ModeloProducto): Observable<ModeloProducto> {
    return this.http.post<ModeloProducto>(`${this.url}/producto-servicios`, producto, {
      headers: new HttpHeaders({
        'Autorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarProducto(producto: ModeloProducto): Observable<ModeloProducto> {
    return this.http.put<ModeloProducto>(`${this.url}/producto-servicios/${producto.id}`, producto, {
      headers: new HttpHeaders({
        'Autorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarProducto(id: string): Observable <any> {
    return this.http.delete(`${this.url}/producto-servicios/${id}`, {
      headers: new HttpHeaders({
        'Autorization': `Bearer ${this.token}`
      })
    })
  }

}