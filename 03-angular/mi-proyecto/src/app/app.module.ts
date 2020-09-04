import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './componentes/carta-pelicula/carta-pelicula.component';
import { UsuarioService } from './servicios/http/usuario.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CartaPeliculaComponent
  ],
  imports: [
    BrowserModule, // Este es el que importa el ngFor y
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
