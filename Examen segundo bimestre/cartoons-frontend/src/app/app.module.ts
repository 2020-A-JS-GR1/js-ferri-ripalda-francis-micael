import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCartoonComponent } from './components/lista-cartoon/lista-cartoon.component';
import { FormsModule } from '@angular/forms';
import { CartoonService } from './services/cartoon.service';
import { HttpClientModule } from '@angular/common/http';
import { CartoonComponent } from './components/cartoon/cartoon.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { ListaPersonajeComponent } from './components/lista-personaje/lista-personaje.component';
import { FormularioCartoonComponent } from './components/formulario-cartoon/formulario-cartoon.component';
import { FormularioPersonajeComponent } from './components/formulario-personaje/formulario-personaje.component';
import { CrearPersonajeComponent } from './components/crear-personaje/crear-personaje.component';
import { PersonajeService } from './services/personaje.service';
import { EditarPersonajeComponent } from './components/editar-personaje/editar-personaje.component';
import { CrearCartoonComponent } from './components/crear-cartoon/crear-cartoon.component';
import { EditarCartoonComponent } from './components/editar-cartoon/editar-cartoon.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCartoonComponent,
    CartoonComponent,
    InicioComponent,
    PersonajeComponent,
    ListaPersonajeComponent,
    FormularioCartoonComponent,
    FormularioPersonajeComponent,
    CrearPersonajeComponent,
    EditarPersonajeComponent,
    CrearCartoonComponent,
    EditarCartoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CartoonService,
    PersonajeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
