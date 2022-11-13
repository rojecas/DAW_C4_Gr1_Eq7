import { AuthenticationComponent, registerAuthenticationStrategy } from '@loopback/authentication';
import { BootMixin } from '@loopback/boot';
import { ApplicationConfig } from '@loopback/core';
import { RestApplication } from '@loopback/rest';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import { RepositoryMixin } from '@loopback/repository';
import { ServiceMixin } from '@loopback/service-proxy';
import path from 'path';
import { MySequence } from './sequence';
import { EstrategiaAdministrador } from './strategies/admin.strategies';
import { EstrategiaCliente } from './strategies/cliente.strategies';
import { EstrategiaVendedor } from './strategies/vendedor.strategies';

export { ApplicationConfig };

export class MascotaFelizApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
    // registrar aqui las estrategias de autenticacion para los distintos roles.
    /* registerAuthenticationStrategy({ arg0: this, EstrategiaAdministrador });
    registerAuthenticationStrategy({ arg0: this, EstrategiaCliente });
    registerAuthenticationStrategy({ arg0: this, EstrategiaVendedor });
    this.component(AuthenticationComponent); */
    registerAuthenticationStrategy( this, EstrategiaAdministrador);
    registerAuthenticationStrategy( this, EstrategiaCliente);
    registerAuthenticationStrategy(this, EstrategiaVendedor);
    this.component(AuthenticationComponent);
  }
}

/* function registerAuthenticationStrategy(arg0: unknown) {
  throw new Error('Function not implemented');
} */