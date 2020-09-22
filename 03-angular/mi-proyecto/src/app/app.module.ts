import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './componentes/carta-pelicula/carta-pelicula.component';
import { UsuarioService } from './servicios/http/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaDetalleUsuarioComponent } from './rutas/ruta-detalle-usuario/ruta-detalle-usuario.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaCrearUsuarioComponent } from './rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaEditarUsuarioComponent } from './rutas/ruta-editar-usuario/ruta-editar-usuario.component';
import { RutaListaUsuarioComponent } from './rutas/ruta-lista-usuario/ruta-lista-usuario.component';
import { FormularioUsuarioComponent } from './componentes/formularios/formulario-usuario/formulario-usuario.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './servicios/auth/auth.service';
import { EstaLogueadoGuard } from './servicios/guards/esta-logueado.guard';
import { EsAdministradorGuard } from './servicios/guards/es-administrador.guard';
import { EsSupervisorGuard } from './servicios/guards/es-supervisor.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    CartaPeliculaComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaDetalleUsuarioComponent,
    RutaUsuarioComponent,
    RutaCrearUsuarioComponent,
    RutaEditarUsuarioComponent,
    RutaListaUsuarioComponent,
    FormularioUsuarioComponent
  ],
  imports: [
    BrowserModule, // Este es el que importa el ngFor y
    AppRoutingModule,
    HttpClientModule, 
    FormsModule, BrowserAnimationsModule, // PErmite la fucnionalidad de los formularios de templates
    MatButtonModule, NgbModule, ButtonModule
  ],
  providers: [
    UsuarioService,
    AuthService,
    EstaLogueadoGuard,
    EsAdministradorGuard,
    EsSupervisorGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
