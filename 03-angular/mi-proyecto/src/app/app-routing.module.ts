import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaListaUsuarioComponent } from './rutas/ruta-lista-usuario/ruta-lista-usuario.component';
import { RutaCrearUsuarioComponent } from './rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaEditarUsuarioComponent } from './rutas/ruta-editar-usuario/ruta-editar-usuario.component';
import { EstaLogueadoGuard } from './servicios/guards/esta-logueado.guard';
import { EsSupervisorGuard } from './servicios/guards/es-supervisor.guard';

const routes: Routes = [
  {
    component: RutaInicioComponent, // COmponente 
    path: "inicio" //URL
  },
  {
    component: RutaLoginComponent, // COmponente 
    path: "login" //URL
  },
  {
    component: RutaUsuarioComponent,
    path: "usuario",
    canActivate: [EstaLogueadoGuard],
    children: [
      {
        path: "lista",
        component: RutaListaUsuarioComponent
      },
      {
        path: "crear",
        component: RutaCrearUsuarioComponent,
        canActivate: [EsSupervisorGuard]
      },
      {
        path: "editar/:id",
        component: RutaEditarUsuarioComponent,
        canActivate: [EsSupervisorGuard]
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
    pathMatch: "full"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
