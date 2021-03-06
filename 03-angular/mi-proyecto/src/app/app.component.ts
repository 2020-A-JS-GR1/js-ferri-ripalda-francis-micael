import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './servicios/http/usuario.service';
import { AuthService } from './servicios/auth/auth.service';

@Component({
  selector: 'aplicacion-nueva',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mi-proyecto';

  habilitado = true;

  arregloNumeros= [1,2,3,4,5,6];

  arregloPeliculas = [
    {
      id: 0,
      url: "https://i.pinimg.com/originals/32/92/5e/32925e3718ee000e49c79f06f6c4389e.jpg",
      descripcion: "Pelicula de super herores",
      nombrePelicula: "Spiederman",
    },
    {
      id: 1,
      url: "https://harrymedia.com/data/media/1/af2-hpfilmfest-es2018.jpg",
      descripcion: "Pelicula de un mago puberto",
      nombrePelicula: "Harry Potter",
    },
    {
      id: 3,
      url: "https://i.blogs.es/3b9334/el-caballero-oscuro-la-leyenda-renace-1446020992/1366_2000.jpeg",
      descripcion: "Justiciero enmascarado darks",
      nombrePelicula: "Batman",
    }
  ]
  
  arregloUsuarios = [];

  arregloObservables = [];

  // Inyectar Dependencias
  constructor(
    private readonly _usuarioService: UsuarioService,
    readonly _authService: AuthService
  ) {
  }
  
  ngOnInit(){
    this.mensajeConsola(true);
  }
  
  mensajeConsola(objeto: boolean) {
    console.log('Llego el evento', objeto);
    const observableTraerTodos = this._usuarioService.traerTodos();
    observableTraerTodos
      .subscribe(
        (data)=>{ // THEN TRY
          this.arregloUsuarios = data as any[];
          console.log(data);
        },
        (error)=>{ // CATCH
          console.log(error);
        }
      );
  }

  crearUsuario(){
    const ususarioNuevo = {
      cedula: "1342716789",
      nombre: "naruto",
      apellido: "Uzumaki"
    };
    const obsCrearUsuario = this._usuarioService.crear(ususarioNuevo);
    this.arregloObservables.push(obsCrearUsuario);
    const subscripcion = obsCrearUsuario
      .subscribe(
        (datos) => {
          console.log("Nuevo usuario" + datos);
          this.mensajeConsola(true);
        },
        (error) => {
          console.log("Error " + error);
          
        }
      )
      this.arregloObservables.push(subscripcion);
  }
  
}

