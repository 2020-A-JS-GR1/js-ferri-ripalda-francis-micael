import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCartoonComponent } from './components/lista-cartoon/lista-cartoon.component';
import { CartoonComponent } from './components/cartoon/cartoon.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { ListaPersonajeComponent } from './components/lista-personaje/lista-personaje.component';
import { FormularioPersonajeComponent } from './components/formulario-personaje/formulario-personaje.component';
import { CrearPersonajeComponent } from './components/crear-personaje/crear-personaje.component';
import { EditarPersonajeComponent } from './components/editar-personaje/editar-personaje.component';
import { EditarCartoonComponent } from './components/editar-cartoon/editar-cartoon.component';
import { CrearCartoonComponent } from './components/crear-cartoon/crear-cartoon.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },
  { 
    path: "cartoon", 
    component: CartoonComponent,
    children: [
      {
        path: "lista",
        component: ListaCartoonComponent
      },
      {
        path: "crear",
        component: CrearCartoonComponent
      },
      {
        path: "editar/:id",
        component: EditarCartoonComponent
      },
      {
        path: "",
        redirectTo: "lista",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "personaje",
    component: PersonajeComponent,
    children: [
      {
        path: "lista",
        component: ListaPersonajeComponent
      },
      {
        path: "crear",
        component: CrearPersonajeComponent
      },
      {
        path: "editar/:id",
        component: EditarPersonajeComponent
      },
      {
        path: "",
        redirectTo: "lista",
        pathMatch: "full"
      }
    ]
  },
  {
    path:"",
    redirectTo:"/inicio",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
