import {AuthenticationStrategy} from "@loopback/authentication";
import {service} from "@loopback/core";
import {HttpErrors} from "@loopback/rest";
import {UserProfile} from "@loopback/security";
import {Request} from "express";
import parseBearerToken from "parse-bearer-token";
import {AutenticacionService} from "../services";

export class EstrategiaCliente implements AuthenticationStrategy {
  name: string = 'cliente';
  constructor(
    @service(AutenticacionService)
    public servicioAutenticacion: AutenticacionService
  ) { }

  async authenticate(request: Request): Promise<UserProfile | undefined> {
    let token = parseBearerToken(request);
    if (token) {
      let datos = this.servicioAutenticacion.ValidarToken(token)
      if (datos.data.rol == 'cliente') {// validar el rol que tiene
        let perfil: UserProfile = Object.assign({
          nombre: datos.data.nombre,
          apellido: datos.data.apellido
        });
        return perfil;
      } else {
        throw new HttpErrors[401]('Cli.Str: Token invalido')
      }
    } else {
      throw new HttpErrors[401]('Cli.Str: No se incluyo el Token')
    }
  }
}
