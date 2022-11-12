import { authenticate } from '@loopback/authentication';
import { service } from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  HttpErrors,
} from '@loopback/rest';
import { Credenciales, Usuario } from '../models';
import { UsuarioRepository } from '../repositories';
import { AutenticacionService } from '../services';
const fetch = require('node-fetch');

export class UsuarioController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository,
    @service(AutenticacionService)
    public serviceAutenticacion: AutenticacionService
  ) { }

  @post('/identificarUsuario', {
    responses: {
      '200': {
        description: 'Identificacion de usuarios'
      }
    }
  })

  async identificarUsuario(
    @requestBody() credenciales: Credenciales 
  ){
    let p = await this.serviceAutenticacion.IdentificarPersona(credenciales.usuario, credenciales.clave);
    if(p){
      let token= this.serviceAutenticacion.GenerarTokenJWT(p);
      return{
        datos:{
          nombre: p.nombre,
          apellido: p.apellido,
          cedula: p.cedula,
          telefono: p.telefono,
          correo: p.correo,
          id: p.id,
          rol: p.rol
        },
        tk: token
      }
    }else{
      throw new HttpErrors[401]('Datos invalido, olvido su contraseña?');
    }
  }

  //@authenticate('admin')
  @post('/usuarios')
  @response(200, {
    description: 'Usuario model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Usuario) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuario',
            exclude: ['id'],
          }),
        },
      },
    })
    usuario: Omit<Usuario, 'id'>,
  ): Promise<Usuario> {
    let clave = this.serviceAutenticacion.GenerarClave();
    let claveCifrada = this.serviceAutenticacion.CifrarClave(clave);
    usuario.contrasena = claveCifrada;
    let p = await this.usuarioRepository.create(usuario); // es porque esta funcion es bloqueante
    //return this.usuarioRepository.create(usuario);
    // Notificar al usuario
    let destino = usuario.correo;
    let asunto = 'Confirmacion de registro';
    let contenido = `Hola ${usuario.nombre}, Su cuenta de usuario Mascota Feliz fue creado correctamente\n su nombre de usuario es: ${usuario.correo}, y su contraseña es ${clave}`;
    fetch(`http://127.0.0.1:5000/email?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`).then((data: any) => {
      console.log(data);
    })
    return p;
  }

  @get('/usuarios/count')
  @response(200, {
    description: 'Usuario model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.count(where);
  }

  @get('/usuarios')
  @response(200, {
    description: 'Array of Usuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Usuario, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.filter(Usuario) filter?: Filter<Usuario>,
  ): Promise<Usuario[]> {
    return this.usuarioRepository.find(filter);
  }

  @patch('/usuarios')
  @response(200, {
    description: 'Usuario PATCH success count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, { partial: true }),
        },
      },
    })
    usuario: Usuario,
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.updateAll(usuario, where);
  }

  @get('/usuarios/{id}')
  @response(200, {
    description: 'Usuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Usuario, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Usuario, { exclude: 'where' }) filter?: FilterExcludingWhere<Usuario>
  ): Promise<Usuario> {
    return this.usuarioRepository.findById(id, filter);
  }

  @patch('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, { partial: true }),
        },
      },
    })
    usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.updateById(id, usuario);
  }

  @put('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.replaceById(id, usuario);
  }

  @del('/usuarios/{id}')
  @response(204, {
    description: 'Usuario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioRepository.deleteById(id);
  }
}
