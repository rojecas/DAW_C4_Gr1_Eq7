import {AuthenticationStrategy} from "@loopback/authentication";
import {service} from "@loopback/core";
import {HttpErrors} from "@loopback/rest";
import {UserProfile} from "@loopback/security";
import {Request} from "express";
import parseBearerToken from "parse-bearer-token";
import {AutenticacionService} from "../services";

export class EstrategiaVendedor implements AuthenticationStrategy {
  name: string = 'vendedor';
  constructor(
    @service(AutenticacionService)
    public servicioAutenticacion: AutenticacionService
  ) { }

  async authenticate(request: Request): Promise<UserProfile | undefined> {
    let token = parseBearerToken(request);
    if (token) {
      let datos = this.servicioAutenticacion.ValidarToken(token)
      if (datos.data.rol == 'vendedor') {// validar el rol que tiene
        let perfil: UserProfile = Object.assign({
          nombre: datos.data.nombre,
          apellido: datos.data.apellido
        });
        return perfil;
      } else {
        throw new HttpErrors[401]('Vend.Str: Token invalido')
      }
    } else {
      throw new HttpErrors[401]('Vend.Str: No se incluyo el Token')
    }
  }
}
