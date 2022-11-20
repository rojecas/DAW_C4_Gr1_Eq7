import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {ProductoServicio} from '../models';
import {ProductoServicioRepository} from '../repositories';

@authenticate("admin")
export class ProductoServicioController {
  constructor(
    @repository(ProductoServicioRepository)
    public productoServicioRepository: ProductoServicioRepository,
  ) { }

  @authenticate.skip()
  @post('/producto-servicios')
  @response(200, {
    description: 'ProductoServicio model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProductoServicio)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductoServicio, {
            title: 'NewProductoServicio',
            exclude: ['id'],
          }),
        },
      },
    })
    productoServicio: Omit<ProductoServicio, 'id'>,
  ): Promise<ProductoServicio> {
    return this.productoServicioRepository.create(productoServicio);
  }

  @authenticate.skip()
  @get('/producto-servicios/count') // me entrega la cantidad de productos
  @response(200, {
    description: 'ProductoServicio model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProductoServicio) where?: Where<ProductoServicio>,
  ): Promise<Count> {
    return this.productoServicioRepository.count(where);
  }

  @authenticate.skip()
  @get('/producto-servicios')// me entrega un listado de todos los productos
  @response(200, {
    description: 'Array of ProductoServicio model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProductoServicio, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProductoServicio) filter?: Filter<ProductoServicio>,
  ): Promise<ProductoServicio[]> {
    return this.productoServicioRepository.find(filter);
  }

  @authenticate.skip()
  @patch('/producto-servicios')
  @response(200, {
    description: 'ProductoServicio PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductoServicio, {partial: true}),
        },
      },
    })
    productoServicio: ProductoServicio,
    @param.where(ProductoServicio) where?: Where<ProductoServicio>,
  ): Promise<Count> {
    return this.productoServicioRepository.updateAll(productoServicio, where);
  }
  @authenticate.skip()
  @get('/producto-servicios/{id}')
  @response(200, {
    description: 'ProductoServicio model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProductoServicio, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ProductoServicio, {exclude: 'where'}) filter?: FilterExcludingWhere<ProductoServicio>
  ): Promise<ProductoServicio> {
    return this.productoServicioRepository.findById(id, filter);
  }

  @authenticate.skip()
  @patch('/producto-servicios/{id}')
  @response(204, {
    description: 'ProductoServicio PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProductoServicio, {partial: true}),
        },
      },
    })
    productoServicio: ProductoServicio,
  ): Promise<void> {
    await this.productoServicioRepository.updateById(id, productoServicio);
  }

  @authenticate.skip()
  @put('/producto-servicios/{id}')
  @response(204, {
    description: 'ProductoServicio PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() productoServicio: ProductoServicio,
  ): Promise<void> {
    await this.productoServicioRepository.replaceById(id, productoServicio);
  }

  @del('/producto-servicios/{id}')
  @response(204, {
    description: 'ProductoServicio DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.productoServicioRepository.deleteById(id);
  }
}
