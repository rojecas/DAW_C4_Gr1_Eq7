import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  url = 'http://localhost:3000';
  datosUsuarioEnSesion= new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());
  constructor(private http: HttpClient) {
    this.VerificarSesionActual();
  }

  VerificarSesionActual(){
    let datos =this.ObtenerInformacionSesion();
    if(datos){
      this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos: ModeloIdentificar){
    this.datosUsuarioEnSesion.next(datos);
  }

  obtenerDatosUsuarioEnSesion(){
    return this.datosUsuarioEnSesion.asObservable();
  }

  Identificar(usuario: string, clave: string): Observable<ModeloIdentificar> {
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarUsuario`, {
      usuario: usuario,
      clave: clave
    }, {
      headers: new HttpHeaders({})
    })
  }

  AlmacenarSesion(datos: ModeloIdentificar) {
    datos.estaIdentificado=true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem('datosSesion', stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  ObtenerInformacionSesion() {
    let datosSring = localStorage.getItem('datosSesion');
    if (datosSring) {
      let datos= JSON.parse(datosSring);
      return datos;
    } else {
      return null;
    }
  }

  EliminarInformacionSesion() {
    localStorage.removeItem('datosSesion');
    this.RefrescarDatosSesion(new ModeloIdentificar())
  }

  seHaIniciadoSesion(){
    let datosSring = localStorage.getItem('datosSesion');
    return datosSring;
  }

  ObtenerToken(){
    let datosSring = localStorage.getItem('datosSesion');
    if (datosSring){
      let datos = JSON.parse(datosSring);
      return datos.tk;
    }else{
      return '';
    }
  }

}
