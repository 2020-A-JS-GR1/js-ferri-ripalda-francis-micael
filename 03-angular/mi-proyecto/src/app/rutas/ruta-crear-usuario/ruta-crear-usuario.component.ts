import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';
import { UsuarioService } from '../../servicios/http/usuario.service';

@Component({
  selector: 'app-ruta-crear-usuario',
  templateUrl: './ruta-crear-usuario.component.html',
  styleUrls: ['./ruta-crear-usuario.component.css']
})
export class RutaCrearUsuarioComponent implements OnInit {

  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  crearUsuario(usuario){
    const observableCrear = this._usuarioService.crear(usuario);
    observableCrear.subscribe(
      (datos) => {
        const url = ["/usuario", "lista"];
        this.router.navigate(url);
      },
      (error) => {
        console.log("Error: ",error);
        
      } 

    )
  }

}
