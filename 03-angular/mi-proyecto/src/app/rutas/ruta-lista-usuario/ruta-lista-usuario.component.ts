import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/http/usuario.service';

@Component({
  selector: 'app-ruta-lista-usuario',
  templateUrl: './ruta-lista-usuario.component.html',
  styleUrls: ['./ruta-lista-usuario.component.css']
})
export class RutaListaUsuarioComponent implements OnInit {

  arregloUsuarios = [];
  constructor( 
    private readonly _usuarioService: UsuarioService,
    private readonly _router: Router
  ) { 
   
  }

  irAEditarUsuario(id: number){
    const ruta = ["/usuario", "editar", id]
    // /usuario/editar/1
    this._router.navigate(ruta);
  }

  eliminarUsuario(id: number){
    const obsEliminar = this._usuarioService.eliminar(id);
    obsEliminar
      .subscribe(
        () => {
          const indice = this.arregloUsuarios.findIndex(u => u.id === id);
          this.arregloUsuarios.splice(indice,1);
        },
        (error) => {
          console.log("Error", error);
        }
      )
  }

  ngOnInit(): void {
    const obserbableTraerTodos = this._usuarioService.traerTodos();
    obserbableTraerTodos
      .subscribe(
        (usuarios: any) => {
          this.arregloUsuarios = usuarios;
        },
        (error) => {
          console.log("Error", error);
          
        }
      )
  }

}
